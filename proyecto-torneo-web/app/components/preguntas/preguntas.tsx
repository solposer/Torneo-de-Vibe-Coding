"use client";

import React, { useState } from 'react';
import { MessageCircleQuestion, Plus, X } from 'lucide-react';
import { preguntasFrecuentes } from '@/app/data/fechas-preguntas-data.json';

export default function PreguntasFrecuentesSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(3);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full p-8 md:p-12 font-sans rounded-sm" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <div className="max-w-4xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <MessageCircleQuestion style={{ color: '#427cf8', width: '2rem', height: '2rem' }} />
                        <h2 className="font-pixel tracking-widest uppercase" style={{ color: '#427cf8', fontSize: '1.25rem' }}>
                            Preguntas frecuentes
                        </h2>
                    </div>
                    
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {preguntasFrecuentes.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                style={{
                                    borderBottom: index === preguntasFrecuentes.length - 1 ? 'none' : '1px solid #1a1a1a',
                                    paddingTop: '1.5rem',
                                    paddingBottom: '1.5rem',
                                }}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
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
                                    <h3 style={{
                                        color: isOpen ? '#ffffff' : '#d1d5db',
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        transition: 'color 0.3s',
                                        margin: 0,
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
                                            <X style={{ color: '#b91d73', width: '1.5rem', height: '1.5rem' }} />
                                        ) : (
                                            <Plus style={{ color: '#b91d73', width: '1.5rem', height: '1.5rem' }} />
                                        )}
                                    </div>
                                </button>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                                    opacity: isOpen ? 1 : 0,
                                    marginTop: isOpen ? '1rem' : '0',
                                    transition: 'grid-template-rows 0.3s ease-in-out, opacity 0.3s ease-in-out, margin-top 0.3s ease-in-out'
                                }}>
                                    <div style={{ overflow: 'hidden' }}>
                                        <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.6', paddingRight: '3rem', margin: 0 }}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}