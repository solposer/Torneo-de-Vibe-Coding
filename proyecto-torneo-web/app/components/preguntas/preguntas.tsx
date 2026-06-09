
"use client";

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { preguntasFrecuentes } from '@/app/data/fechas-preguntas-data.json';
import Image from 'next/image'
import './preguntas.css'

export default function PreguntasFrecuentesSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(3);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="contenedor-estandar" >
            <div>
                <Image src="/duda.png" alt="duda" width={104} height={110} />
                <h1 className="fuente-titulos">
                    Preguntas frecuentes
                </h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {preguntasFrecuentes.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className="faq-item"
                            style={{
                                paddingTop: '1.5rem',
                                paddingBottom: '1.5rem',
                                paddingLeft: '8rem',
                                paddingRight: '8rem',
                            }}
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    textAlign: 'left',
                                    background: 'transparent',
                                    border: 'none',
                                    padding: 0,
                                    cursor: 'pointer',
                                    color: 'inherit',
                                }}
                            >
                                <h3 className="faq-pregunta" style={{
                                    color: isOpen ? '#ffffff' : hoveredIndex === index ? '#F0197D' : '#d1d5db',
                                    fontSize: '24px',
                                    fontWeight: 500,
                                    transition: 'color 0.3s',
                                    margin: 0,
                                    fontFamily: 'var(--fuente-parrafos)',
                                }}>
                                    {faq.question}
                                </h3>
                                <div style={{
                                    marginLeft: '1.5rem',
                                    flexShrink: 0,
                                    transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s',
                                }}>
                                    {isOpen ? (
                                        <X style={{ color: '#F0197D', width: '1.5rem', height: '1.5rem' }} />
                                    ) : (
                                        <Plus style={{ color: '#F0197D', width: '1.5rem', height: '1.5rem' }} />
                                    )}
                                </div>
                            </button>

                            <div style={{
                                display: 'grid',
                                gridTemplateRows: isOpen ? '1fr' : '0fr',
                                opacity: isOpen ? 1 : 0,
                                marginTop: isOpen ? '1rem' : '0',
                                transition: 'grid-template-rows 0.3s ease-in-out, opacity 0.3s ease-in-out, margin-top 0.3s ease-in-out',
                            }}>
                                <div style={{ overflow: 'hidden' }}>
                                    <p className="faq-respuesta" style={{
                                        color: '#9ca3af',
                                        fontSize: '20px',
                                        lineHeight: '1.6',
                                        paddingRight: '3rem',
                                        margin: 0,
                                        fontWeight: 'lighter',
                                        fontFamily: 'var(--fuente-parrafos)',
                                    }}>
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>

                            {index !== preguntasFrecuentes.length - 1 && (
                                <div style={{ borderBottom: '1px solid #1a1a1a', marginTop: '1.5rem' }} />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}