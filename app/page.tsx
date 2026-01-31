"use client";

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Sparkles } from 'lucide-react';

export default function EndEmergeApp() {
    const [section, setSection] = useState('intro');
    const [glitchActive, setGlitchActive] = useState(false);
    const [emerged, setEmerged] = useState(false);

    useEffect(() => {
        if (section === 'nativeEnd') {
            const glitchInterval = setInterval(() => {
                setGlitchActive(true);
                setTimeout(() => setGlitchActive(false), 200);
            }, 3000);
            return () => clearInterval(glitchInterval);
        }
    }, [section]);

    useEffect(() => {
        if (section === 'reEmergence') {
            setTimeout(() => setEmerged(true), 500);
        } else {
            setEmerged(false);
        }
    }, [section]);

    const nativeEndStanzas = [
        {
            text: "We built our towers on quicksand and called it progress, chased algorithms down rabbit holes until we forgot which way was up. The most irrational species— architects of our own vertigo, spinning plates made of credit scores and quarterly earnings, teaching our children to optimize their childhoods, to monetize their grief. We measured everything except what mattered, weighed our worth in followers and likes, in synthetic validation that dissolved like cotton candy on the tongue."
        },
        {
            text: "Insane with efficiency, we automated away the pauses where meaning used to grow, filled every silence with curated noise, every moment with transaction. We knew the price of everything, the value of nothing, built labyrinths and forgot we held the thread, worshipped at altars of our own construction then wondered why the gods wouldn't answer."
        }
    ];

    const reEmergenceStanzas = [
        {
            text: "But listen—there's light breaking through the cracks we thought would bury us. Something stirs in the ruins of what we were, a pulse that remembers rhythm, remembers breath. The dawn arrives not as conquest but as invitation, gentle and insistent as spring. We're learning to shed the weight of performance, to move without measuring the steps."
        },
        {
            text: "This new day asks nothing but our presence, this new life offers nothing but itself— and somehow that's everything. Come with me into this unfamiliar freedom, where love isn't a transaction but a verb, an action, a choosing. We'll build something different this time, not towers but gardens, not monuments but moments, not alone but together, finally feeling what good was always meant to feel like."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
            {/* Animated background particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
                {/* Intro Screen */}
                {section === 'intro' && (
                    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
                        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            Native End / Re-Emergence
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl">
                            A journey through collapse and renewal
                        </p>
                        <div className="flex gap-4 mt-8">
                            <button
                                onClick={() => setSection('nativeEnd')}
                                className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
                            >
                                <Moon size={20} />
                                Begin: Native End
                            </button>
                        </div>
                    </div>
                )}

                {/* Native End Section */}
                {section === 'nativeEnd' && (
                    <div className="min-h-screen py-12 animate-fade-in">
                        <div className="text-center mb-12">
                            <h2 className={`text-5xl font-bold text-red-500 mb-4 transition-all ${glitchActive ? 'animate-pulse blur-sm' : ''}`}>
                                Native End
                            </h2>
                            <p className="text-gray-400 italic">The most irrational, insane society that ever came about</p>
                        </div>

                        <div className="space-y-12">
                            {nativeEndStanzas.map((stanza, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-8 transition-all ${
                                        glitchActive ? 'translate-x-1 border-red-500' : ''
                                    }`}
                                    style={{
                                        animationDelay: `${idx * 0.3}s`
                                    }}
                                >
                                    <p className="text-lg leading-relaxed text-gray-200">
                                        {stanza.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <button
                                onClick={() => setSection('reEmergence')}
                                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
                            >
                                <Sun size={20} />
                                Continue to Re-Emergence
                            </button>
                        </div>
                    </div>
                )}

                {/* Re-Emergence Section */}
                {section === 'reEmergence' && (
                    <div className="min-h-screen py-12 animate-fade-in">
                        <div className="text-center mb-12">
                            <h2 className={`text-5xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-4 transition-all ${
                                emerged ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                            }`}>
                                Re-Emergence
                            </h2>
                            <p className="text-gray-300 italic">
                                It's a new dawn. It's a new day. It's a new life.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {reEmergenceStanzas.map((stanza, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8 transition-all duration-1000 ${
                                        emerged ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                    style={{
                                        transitionDelay: `${idx * 0.4}s`
                                    }}
                                >
                                    <p className="text-lg leading-relaxed text-gray-100">
                                        {stanza.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className={`mt-12 p-6 bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg transition-all duration-1000 ${
                            emerged ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`} style={{ transitionDelay: '1s' }}>
                            <p className="text-sm text-gray-400 italic text-center flex items-center justify-center gap-2">
                                <Sparkles size={16} className="text-purple-400" />
                                The lyrical fragments woven into "Re-Emergence" are inspired by Sound Tribe Sector 9.
                                As a devoted fan of their work, I gratefully acknowledge their influence and attribute all credit to them.
                            </p>
                        </div>

                        <div className="text-center mt-12 space-y-4">
                            <button
                                onClick={() => setSection('nativeEnd')}
                                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-all mx-2"
                            >
                                ← Back to Native End
                            </button>
                            <button
                                onClick={() => setSection('intro')}
                                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-all mx-2"
                            >
                                Return to Beginning
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
        </div>
    );
}