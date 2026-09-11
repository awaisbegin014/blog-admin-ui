import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Search,
  Star,
  Phone,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Activity,
  CheckCircle2,
  Clock,
  MapPin,
  Flame,
  Dumbbell,
  Compass,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
   WEBSITE 1: VELOUR — Luxury Haute Couture Salon & Aesthetic Studio
   Editorial, asymmetrical layout with warm champagne & rose gold
   ────────────────────────────────────────────────────────────── */
const VelourDesktop: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#0d0a0d] text-white select-none overflow-hidden text-[11px] leading-tight">
    {/* Nav: Centered Luxury Serif Header */}
    <div className="flex items-center justify-between px-3 py-1.5 bg-black/80 border-b border-rose-900/30 shrink-0">
      <div className="flex items-center gap-2 text-[8.5px] text-gray-400">
        <span className="hover:text-rose-300 cursor-pointer">SERVICES</span>
        <span className="hover:text-rose-300 cursor-pointer">LOOKBOOK</span>
        <span className="hover:text-rose-300 cursor-pointer">ARTISTS</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-rose-400 text-[9px]">✦</span>
        <span className="font-serif tracking-[0.25em] text-[11px] font-bold text-rose-200">
          V E L O U R
        </span>
        <span className="text-rose-400 text-[9px]">✦</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[8px] text-rose-300/80 font-serif italic">Beverly Hills</span>
        <button className="bg-gradient-to-r from-rose-500 to-amber-600 text-white font-medium text-[8px] px-2.5 py-1 rounded-full shadow-sm">
          Book Master Stylist
        </button>
      </div>
    </div>

    {/* Hero: Editorial Split Layout */}
    <div className="relative flex-1 grid grid-cols-12 gap-3 p-3 items-center overflow-hidden">
      {/* Background subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-rose-950/20 to-black z-0" />

      {/* Left Column (5 cols): Editorial typography */}
      <div className="relative z-10 col-span-5 flex flex-col justify-center">
        <span className="text-[7.5px] font-serif uppercase tracking-[0.2em] text-rose-400 mb-1">
          ✦ Couture Hair & Aesthetics
        </span>
        <h2 className="font-serif italic text-[18px] lg:text-[21px] text-rose-100 leading-[1.1] mb-1.5">
          Elegance In Every Strand.
        </h2>
        <p className="text-[8px] text-gray-400 font-light leading-relaxed mb-2.5">
          Bespoke balayage, custom French cuts, and organic cellular spa rituals by master Parisian artisans.
        </p>
        <div className="flex items-center gap-2 mb-2">
          <button className="bg-rose-500 text-white text-[8px] font-medium px-3 py-1.5 rounded-full shadow-lg shadow-rose-950/50 flex items-center gap-1">
            <span>Reserve Session</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </button>
          <span className="text-[8px] text-gray-400 hover:text-white cursor-pointer underline underline-offset-2">
            Spring Lookbook →
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-300/90 text-[7.5px]">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2 h-2 fill-amber-300" />
            ))}
          </div>
          <span className="font-serif italic text-gray-300">Vogue Beauty Guide 2024 Winner</span>
        </div>
      </div>

      {/* Right Column (7 cols): Editorial Photo Gallery Offset */}
      <div className="relative z-10 col-span-7 grid grid-cols-2 gap-2 h-full items-center">
        <div className="relative rounded-lg overflow-hidden h-[90%] border border-rose-900/40 shadow-xl group">
          <img
            src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-1.5 left-1.5 right-1.5">
            <p className="text-[7.5px] font-serif text-rose-200 font-semibold">Custom Balayage</p>
            <p className="text-[6.5px] text-gray-400">Master Colorist Sarah</p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 h-[90%] justify-between">
          <div className="bg-white/5 border border-rose-500/20 backdrop-blur-md rounded-lg p-2 text-center">
            <span className="text-[7px] text-rose-300 font-serif">Spring Opening</span>
            <p className="text-[9px] font-bold text-white mt-0.5">Complimentary Facial</p>
            <p className="text-[6.5px] text-gray-400">With any Master Cut booking</p>
          </div>
          <div className="relative rounded-lg overflow-hidden h-[50%] border border-rose-900/30">
            <img
              src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Spa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-[7.5px] font-serif text-white tracking-widest uppercase">
                Private VIP Suite
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar: Luxury Ticker Strip */}
    <div className="flex items-center justify-between px-3 py-1 bg-black/95 border-t border-rose-950 text-[7px] text-gray-400 uppercase tracking-widest shrink-0 font-light">
      <span>HAIR COUTURE</span>
      <span>•</span>
      <span>ORGANIC BOTANICAL SPA</span>
      <span>•</span>
      <span>PARISIAN BALAYAGE</span>
      <span>•</span>
      <span>VIP PRIVATE ROOMS</span>
    </div>
  </div>
);

const VelourTablet: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#0d0a0d] text-white select-none overflow-hidden text-[9px] leading-tight">
    <div className="flex items-center justify-between px-2.5 py-1.5 bg-black/90 border-b border-rose-950 shrink-0">
      <span className="font-serif tracking-widest text-[10px] font-bold text-rose-200">
        V E L O U R
      </span>
      <div className="p-1 rounded bg-white/5 text-rose-300">
        <Menu className="w-2.5 h-2.5" />
      </div>
    </div>

    <div className="relative flex-1 p-2.5 flex flex-col justify-between">
      <div className="text-center">
        <span className="text-[6.5px] font-serif uppercase tracking-widest text-rose-400">
          ✦ Luxury Studio
        </span>
        <h2 className="font-serif italic text-[14px] text-rose-100 my-1">
          Elegance In Every Strand
        </h2>
        <p className="text-[7px] text-gray-400 mb-2">Bespoke Parisian styling & organic spa.</p>
        <button className="bg-gradient-to-r from-rose-500 to-amber-600 text-white text-[7.5px] px-3 py-1 rounded-full shadow-md">
          Book Stylist
        </button>
      </div>

      <div className="relative rounded-lg overflow-hidden aspect-[16/9] border border-rose-900/40 my-1">
        <img
          src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <span className="absolute bottom-1 left-2 text-[7.5px] font-serif text-rose-200">
          Spring Lookbook 2024
        </span>
      </div>

      <div className="grid grid-cols-2 gap-1.5 text-center text-[7px]">
        <div className="bg-white/5 p-1 rounded border border-rose-900/30">
          <p className="font-serif text-rose-300">Couture Styling</p>
          <p className="text-[6px] text-gray-400">From $85</p>
        </div>
        <div className="bg-white/5 p-1 rounded border border-rose-900/30">
          <p className="font-serif text-rose-300">Hydra Spa</p>
          <p className="text-[6px] text-gray-400">From $120</p>
        </div>
      </div>
    </div>
  </div>
);

const VelourMobile: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#0d0a0d] text-white select-none overflow-hidden text-[8px] leading-tight">
    <div className="flex items-center justify-between px-2 py-1 bg-black border-b border-rose-950 shrink-0">
      <span className="font-serif tracking-wider text-[8.5px] text-rose-200 font-bold">VELOUR</span>
      <Menu className="w-2.5 h-2.5 text-rose-300" />
    </div>

    <div className="relative flex-1 p-2 flex flex-col justify-between overflow-hidden">
      <div className="relative rounded-lg overflow-hidden h-[45%] border border-rose-900/40">
        <img
          src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        <div className="absolute bottom-1 left-1.5">
          <p className="text-[6px] font-serif text-rose-300">✦ Beverly Hills</p>
          <p className="text-[8px] font-serif font-bold text-white">Elegance In Every Strand</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 my-1">
        <p className="text-[6.5px] text-gray-400 uppercase tracking-wider font-serif">Today's Slots:</p>
        <div className="flex items-center justify-between bg-white/5 border border-rose-900/30 rounded p-1 text-[6.5px]">
          <span>11:30 AM — Cut & Glow</span>
          <span className="text-rose-400 font-bold">Available</span>
        </div>
        <div className="flex items-center justify-between bg-white/5 border border-rose-900/30 rounded p-1 text-[6.5px]">
          <span>03:15 PM — Spa Facial</span>
          <span className="text-rose-400 font-bold">1 Left</span>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-rose-500 to-amber-600 text-white font-serif text-[7.5px] py-1 rounded-full shadow-md text-center">
        Reserve Your Time →
      </button>
    </div>

    <div className="grid grid-cols-3 px-1 py-1 bg-black border-t border-rose-950 text-center text-[5.5px] text-gray-400">
      <span className="text-rose-300">Home</span>
      <span>Artists</span>
      <span>VIP Club</span>
    </div>
  </div>
);

/* ──────────────────────────────────────────────────────────────
   WEBSITE 2: DATAPULSE — SaaS Cloud Intelligence Platform
   Dark tech theme with neon cyan & live interactive chart widget
   ────────────────────────────────────────────────────────────── */
const DataPulseDesktop: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#070b14] text-white select-none overflow-hidden text-[11px] leading-tight">
    {/* Floating Pill Nav */}
    <div className="flex items-center justify-between px-3 py-1.5 bg-[#0b1324]/80 backdrop-blur-md border-b border-cyan-500/20 shrink-0">
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded bg-cyan-400 flex items-center justify-center text-[7px] text-black font-black">
          ▲
        </div>
        <span className="font-mono tracking-tight font-black text-[11px] text-white">
          DATAPULSE<span className="text-cyan-400">.IO</span>
        </span>
      </div>
      <div className="flex items-center gap-3 text-[8.5px] text-gray-400 font-mono">
        <span className="text-cyan-400 font-bold cursor-pointer">/pipeline</span>
        <span className="hover:text-white cursor-pointer">/telemetry</span>
        <span className="hover:text-white cursor-pointer">/api-docs</span>
        <span className="hover:text-white cursor-pointer">/pricing</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-[7.5px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded">
          ● 99.99% Up
        </span>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-[8px] px-2.5 py-1 rounded shadow-md shadow-cyan-500/20">
          Deploy Cluster →
        </button>
      </div>
    </div>

    {/* Hero: SaaS Dashboard Layout with Line Graph */}
    <div className="relative flex-1 grid grid-cols-12 gap-3 p-3 items-center overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />

      {/* Left Column (5 cols): Tech Messaging */}
      <div className="relative z-10 col-span-5 flex flex-col justify-center">
        <div className="inline-flex items-center gap-1 bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[7px] font-mono px-2 py-0.5 rounded-full w-fit mb-1.5">
          <Activity className="w-2.5 h-2.5 text-cyan-400" />
          <span>v4.8 Real-Time Stream Engine</span>
        </div>
        <h2 className="font-black text-[17px] lg:text-[20px] text-white tracking-tight leading-[1.1] mb-1.5">
          Intelligent Cloud Telemetry, Built For Scale.
        </h2>
        <p className="text-[8px] text-gray-400 font-sans leading-relaxed mb-2.5">
          Stream 10M+ events per second with sub-5ms distributed query latency and automated anomaly detection.
        </p>
        <div className="flex items-center gap-2 mb-2.5">
          <button className="bg-cyan-400 text-black font-mono font-bold text-[8.5px] px-3 py-1.5 rounded shadow-lg shadow-cyan-500/30">
            Start Free 14-Day Trial
          </button>
          <button className="border border-white/20 text-gray-300 font-mono text-[8px] px-2.5 py-1.5 rounded bg-white/5">
            $ npm i @datapulse
          </button>
        </div>
        <div className="flex items-center gap-3 text-[7.5px] font-mono text-gray-400">
          <span>⚡ 3.2ms Global P99</span>
          <span>•</span>
          <span>🔒 SOC-2 Type II</span>
        </div>
      </div>

      {/* Right Column (7 cols): Mini Live Interactive Dashboard */}
      <div className="relative z-10 col-span-7 bg-[#0b1324] border border-cyan-500/30 rounded-lg p-2.5 shadow-2xl shadow-cyan-950/50">
        {/* Dashboard Top bar */}
        <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/10">
          <div>
            <span className="text-[6.5px] font-mono uppercase text-gray-400">Cluster Throughput</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[12px] font-mono font-bold text-white">$148,920 ARR</span>
              <span className="text-[7.5px] font-mono text-emerald-400 bg-emerald-950/50 px-1 py-0.2 rounded">
                +24.6%
              </span>
            </div>
          </div>
          <div className="flex gap-1 text-[7px] font-mono">
            <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              1H
            </span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-gray-400">24H</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-gray-400">7D</span>
          </div>
        </div>

        {/* SVG Mini Chart */}
        <div className="h-16 w-full relative mb-2">
          <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 50 Q 30 45, 60 30 T 120 20 T 160 35 T 200 10 L 200 60 L 0 60 Z"
              fill="url(#chartGrad)"
            />
            <path
              d="M 0 50 Q 30 45, 60 30 T 120 20 T 160 35 T 200 10"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Live Cluster Stats Strip */}
        <div className="grid grid-cols-3 gap-1.5 text-[7px] font-mono">
          <div className="bg-white/5 rounded p-1 border border-white/5">
            <p className="text-gray-400">Latency</p>
            <p className="text-cyan-300 font-bold">4.2 ms</p>
          </div>
          <div className="bg-white/5 rounded p-1 border border-white/5">
            <p className="text-gray-400">Requests</p>
            <p className="text-white font-bold">12.4M / sec</p>
          </div>
          <div className="bg-white/5 rounded p-1 border border-white/5">
            <p className="text-gray-400">Error Rate</p>
            <p className="text-emerald-400 font-bold">0.001%</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom: Supported Tech Stacks */}
    <div className="flex items-center justify-between px-3 py-1 bg-[#05080f] border-t border-cyan-950 text-[7.5px] font-mono text-gray-400 shrink-0">
      <span>SUPPORTED RUNTIMES:</span>
      <span className="text-gray-300">PostgreSQL</span>
      <span>•</span>
      <span className="text-gray-300">Apache Kafka</span>
      <span>•</span>
      <span className="text-gray-300">Kubernetes</span>
      <span>•</span>
      <span className="text-gray-300">AWS Lambda</span>
    </div>
  </div>
);

const DataPulseTablet: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#070b14] text-white select-none overflow-hidden text-[9px] leading-tight font-mono">
    <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#0b1324] border-b border-cyan-900/40 shrink-0">
      <span className="font-bold text-cyan-400 text-[10px]">DATAPULSE.IO</span>
      <button className="bg-cyan-500 text-black text-[7px] font-bold px-2 py-0.5 rounded">
        Sign In
      </button>
    </div>

    <div className="relative flex-1 p-2.5 flex flex-col justify-between">
      <div>
        <span className="text-[6.5px] text-cyan-400 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-500/30">
          ● Live Cloud Analytics
        </span>
        <h2 className="text-[14px] font-bold text-white mt-1 leading-snug">
          Cloud Telemetry at Scale
        </h2>
        <p className="text-[7px] text-gray-400 font-sans mt-0.5 mb-2">
          Real-time metrics with sub-5ms query response.
        </p>
      </div>

      <div className="bg-[#0b1324] border border-cyan-500/30 rounded p-2">
        <div className="flex justify-between text-[7px] mb-1">
          <span className="text-gray-400">Total Throughput</span>
          <span className="text-emerald-400 font-bold">+28.4%</span>
        </div>
        <div className="text-[12px] font-bold text-white mb-1.5">14.8M req/s</div>
        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-cyan-400 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5 text-[7px]">
        <div className="bg-white/5 p-1.5 rounded border border-white/10">
          <p className="text-gray-400">Latency P99</p>
          <p className="text-cyan-300 font-bold text-[8.5px]">3.8 ms</p>
        </div>
        <div className="bg-white/5 p-1.5 rounded border border-white/10">
          <p className="text-gray-400">Uptime</p>
          <p className="text-emerald-400 font-bold text-[8.5px]">99.999%</p>
        </div>
      </div>
    </div>
  </div>
);

const DataPulseMobile: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#070b14] text-white select-none overflow-hidden text-[8px] leading-tight font-mono">
    <div className="flex items-center justify-between px-2 py-1 bg-[#0b1324] border-b border-cyan-900/40 shrink-0">
      <span className="font-bold text-cyan-400 text-[8.5px]">PULSE</span>
      <span className="text-[6.5px] text-emerald-400 bg-emerald-950 px-1 rounded">LIVE</span>
    </div>

    <div className="relative flex-1 p-2 flex flex-col justify-between overflow-hidden">
      <div>
        <p className="text-[6px] text-gray-400 uppercase">Current Load</p>
        <p className="text-[13px] font-bold text-white tracking-tight">184.2K</p>
        <p className="text-[6.5px] text-emerald-400">↑ 14% vs yesterday</p>
      </div>

      <div className="bg-[#0b1324] border border-cyan-500/30 rounded p-1.5 my-1">
        <p className="text-[6px] text-gray-400 mb-1">Server Cluster Health</p>
        <div className="flex justify-between text-[6.5px] py-0.5 border-b border-white/5">
          <span>US-East</span>
          <span className="text-emerald-400 font-bold">12ms</span>
        </div>
        <div className="flex justify-between text-[6.5px] py-0.5">
          <span>EU-West</span>
          <span className="text-emerald-400 font-bold">24ms</span>
        </div>
      </div>

      <button className="w-full bg-cyan-400 text-black font-bold text-[7.5px] py-1 rounded shadow-md text-center">
        Open Cloud Console →
      </button>
    </div>

    <div className="grid grid-cols-3 px-1 py-1 bg-[#05080f] border-t border-cyan-950 text-center text-[5.5px] text-gray-400">
      <span className="text-cyan-400">Metrics</span>
      <span>Alerts</span>
      <span>Clusters</span>
    </div>
  </div>
);

/* ──────────────────────────────────────────────────────────────
   WEBSITE 3: ESTATE NOIR — Prime Real Estate & Architecture
   Full-bleed panoramic hero with floating property filter bar
   ────────────────────────────────────────────────────────────── */
const EstateNoirDesktop: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#0b0c10] text-white select-none overflow-hidden text-[11px] leading-tight">
    {/* Nav: Clean Minimal Architectural Header */}
    <div className="flex items-center justify-between px-3 py-1.5 bg-black/85 backdrop-blur-md border-b border-white/10 shrink-0">
      <div className="flex items-center gap-1.5">
        <span className="tracking-[0.2em] font-bold text-[11px] text-white">
          ESTATE <span className="text-amber-400">NOIR</span>
        </span>
      </div>
      <div className="flex items-center gap-3 text-[8.5px] text-gray-300 font-light tracking-wider">
        <span className="text-amber-400 font-medium cursor-pointer">PENTHOUSES</span>
        <span className="hover:text-white cursor-pointer">COASTAL VILLAS</span>
        <span className="hover:text-white cursor-pointer">DEVELOPMENTS</span>
        <span className="hover:text-white cursor-pointer">PRIVATE SALES</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[8px] text-gray-400">+1 310.880.9200</span>
        <button className="border border-amber-400/80 text-amber-300 font-medium text-[8px] px-2.5 py-1 rounded hover:bg-amber-400 hover:text-black transition-colors">
          Private Tour
        </button>
      </div>
    </div>

    {/* Hero: Full-Bleed Architectural Panorama with Search Bar */}
    <div className="relative flex-1 flex flex-col justify-between p-3.5 overflow-hidden">
      {/* Background Villa Photo with Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Villa"
          className="w-full h-full object-cover object-center filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
      </div>

      {/* Top Banner Tag */}
      <div className="relative z-10 flex justify-between items-start">
        <span className="bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[7px] uppercase tracking-widest px-2 py-0.5 rounded">
          ✦ Exclusive Malibu Waterfront
        </span>
        <div className="bg-black/60 backdrop-blur-md border border-white/20 px-2 py-1 rounded text-right">
          <p className="text-[6.5px] text-gray-400 uppercase">Listing Price</p>
          <p className="text-[11px] font-bold text-white">$8,450,000</p>
        </div>
      </div>

      {/* Hero Headline */}
      <div className="relative z-10 max-w-[65%]">
        <h2 className="text-[18px] lg:text-[22px] font-light text-white tracking-tight leading-[1.1] mb-1">
          Extraordinary Living, <span className="font-bold text-amber-300">Unveiled.</span>
        </h2>
        <p className="text-[8px] text-gray-300 font-light">
          Bespoke coastal estates, architectural monuments & private penthouses worldwide.
        </p>
      </div>

      {/* Floating Property Search Filter Bar */}
      <div className="relative z-10 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-1.5 grid grid-cols-4 gap-1.5 items-center shadow-2xl">
        <div className="px-2 border-r border-white/10">
          <p className="text-[6.5px] text-gray-400 uppercase tracking-wider">Location</p>
          <p className="text-[8px] font-semibold text-white truncate">Beverly Hills, CA</p>
        </div>
        <div className="px-2 border-r border-white/10">
          <p className="text-[6.5px] text-gray-400 uppercase tracking-wider">Property Type</p>
          <p className="text-[8px] font-semibold text-white truncate">Modern Villa</p>
        </div>
        <div className="px-2 border-r border-white/10">
          <p className="text-[6.5px] text-gray-400 uppercase tracking-wider">Price Range</p>
          <p className="text-[8px] font-semibold text-white truncate">$5M — $20M</p>
        </div>
        <div>
          <button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-[8px] py-1.5 rounded flex items-center justify-center gap-1 shadow-md">
            <Search className="w-2.5 h-2.5" />
            <span>Search Estates</span>
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Bar: Stats */}
    <div className="flex items-center justify-between px-3 py-1 bg-black border-t border-white/10 text-[7px] text-gray-400 tracking-wider shrink-0 font-light uppercase">
      <span>142 VERIFIED RESIDENCES</span>
      <span>•</span>
      <span>$680M+ CLOSED TRANSACTIONS</span>
      <span>•</span>
      <span>GUARANTEED CONFIDENTIAL ESCROW</span>
    </div>
  </div>
);

const EstateNoirTablet: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#0b0c10] text-white select-none overflow-hidden text-[9px] leading-tight">
    <div className="flex items-center justify-between px-2.5 py-1.5 bg-black/90 border-b border-white/10 shrink-0">
      <span className="font-bold tracking-widest text-[10px]">
        ESTATE <span className="text-amber-400">NOIR</span>
      </span>
      <button className="border border-amber-400 text-amber-300 text-[7px] px-2 py-0.5 rounded">
        Inquire
      </button>
    </div>

    <div className="relative flex-1 p-2.5 flex flex-col justify-between">
      <div className="relative rounded-lg overflow-hidden h-[50%] border border-white/20">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <span className="absolute top-1.5 right-1.5 bg-black/70 text-amber-300 text-[7.5px] px-1.5 py-0.5 rounded font-bold">
          $8,450,000
        </span>
        <div className="absolute bottom-1.5 left-2">
          <p className="text-[6.5px] text-gray-300">Malibu Oceanfront</p>
          <p className="text-[9px] font-bold text-white">Villa Paradiso</p>
        </div>
      </div>

      <div className="bg-black/80 border border-white/10 rounded p-1.5 text-[7px]">
        <div className="grid grid-cols-3 text-center gap-1">
          <div>
            <p className="text-gray-400">Beds</p>
            <p className="font-bold text-white text-[8px]">5</p>
          </div>
          <div>
            <p className="text-gray-400">Baths</p>
            <p className="font-bold text-white text-[8px]">6.5</p>
          </div>
          <div>
            <p className="text-gray-400">Sq Ft</p>
            <p className="font-bold text-white text-[8px]">7,200</p>
          </div>
        </div>
      </div>

      <button className="w-full bg-amber-500 text-black font-bold text-[8px] py-1 rounded">
        Schedule Private Viewing →
      </button>
    </div>
  </div>
);

const EstateNoirMobile: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#0b0c10] text-white select-none overflow-hidden text-[8px] leading-tight">
    <div className="flex items-center justify-between px-2 py-1 bg-black border-b border-white/10 shrink-0">
      <span className="font-bold tracking-widest text-[8px]">ESTATE NOIR</span>
      <Menu className="w-2.5 h-2.5 text-gray-300" />
    </div>

    <div className="relative flex-1 p-2 flex flex-col justify-between overflow-hidden">
      <div className="relative rounded-lg overflow-hidden h-[50%] border border-white/20">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
          className="w-full h-full object-cover"
        />
        <span className="absolute top-1 left-1 bg-amber-500 text-black font-bold text-[6px] px-1 rounded">
          FEATURED
        </span>
        <div className="absolute bottom-1 left-1.5 right-1.5 flex justify-between items-end">
          <div>
            <p className="text-[6px] text-gray-300">Beverly Hills</p>
            <p className="text-[8px] font-bold text-white">Villa Paradiso</p>
          </div>
          <span className="text-[8px] font-bold text-amber-300">$8.4M</span>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded p-1.5 text-[6.5px]">
        <div className="flex justify-between py-0.5 border-b border-white/5">
          <span className="text-gray-400">Living Area</span>
          <span className="font-bold">7,200 sq ft</span>
        </div>
        <div className="flex justify-between py-0.5">
          <span className="text-gray-400">View</span>
          <span className="font-bold text-amber-300">Oceanfront</span>
        </div>
      </div>

      <button className="w-full bg-amber-500 text-black font-bold text-[7.5px] py-1 rounded shadow-md text-center">
        Request Confidential Brochure →
      </button>
    </div>

    <div className="grid grid-cols-3 px-1 py-1 bg-black border-t border-white/10 text-center text-[5.5px] text-gray-400">
      <span className="text-amber-400">Featured</span>
      <span>Search</span>
      <span>Contact</span>
    </div>
  </div>
);

/* ──────────────────────────────────────────────────────────────
   WEBSITE 4: SAGE & SALT — Artisan Farm-to-Table Bistro
   Warm rustic gourmet dining with live table reservation widget
   ────────────────────────────────────────────────────────────── */
const SageSaltDesktop: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#14120f] text-white select-none overflow-hidden text-[11px] leading-tight">
    {/* Nav: Rustic Bistro Header */}
    <div className="flex items-center justify-between px-3 py-1.5 bg-[#1c1915]/90 border-b border-amber-900/30 shrink-0">
      <div className="flex items-center gap-1.5">
        <span className="text-amber-500 text-[10px]">🌿</span>
        <span className="font-serif tracking-widest font-bold text-[11px] text-amber-100">
          SAGE & SALT
        </span>
        <span className="text-[7.5px] text-gray-400 font-sans">| BISTRO</span>
      </div>
      <div className="flex items-center gap-3 text-[8.5px] text-gray-300 font-serif">
        <span className="text-amber-400 cursor-pointer">Seasonal Tasting</span>
        <span className="hover:text-white cursor-pointer">Farm Partners</span>
        <span className="hover:text-white cursor-pointer">Artisan Cellar</span>
        <span className="hover:text-white cursor-pointer">Private Dining</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-amber-600 hover:bg-amber-500 text-white font-serif font-medium text-[8px] px-2.5 py-1 rounded shadow">
          Reserve Table
        </button>
      </div>
    </div>

    {/* Hero: Split Culinary Showcase */}
    <div className="relative flex-1 grid grid-cols-12 gap-3 p-3 items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1c1712]/90 to-black z-0" />

      {/* Left Column (5 cols): Culinary Philosophy */}
      <div className="relative z-10 col-span-5 flex flex-col justify-center">
        <span className="text-[7.5px] font-serif uppercase tracking-widest text-amber-400 mb-1">
          ✦ Michelin Guide Recommended 2024
        </span>
        <h2 className="font-serif italic text-[18px] lg:text-[21px] text-amber-100 leading-[1.1] mb-1.5">
          Honest Food. Woodfire Nights.
        </h2>
        <p className="text-[8px] text-gray-400 font-sans leading-relaxed mb-2.5">
          Hyper-seasonal ingredients sourced daily from Hudson Valley organic farms, paired with natural heritage wines.
        </p>

        {/* Live Reservation Selector */}
        <div className="bg-black/60 border border-amber-900/40 rounded-lg p-2 mb-2">
          <p className="text-[7px] text-amber-300 font-serif mb-1">Tonight's Openings:</p>
          <div className="flex gap-1.5">
            <span className="bg-amber-600 text-white text-[7.5px] font-bold px-2 py-0.5 rounded cursor-pointer">
              6:30 PM
            </span>
            <span className="bg-white/10 text-gray-200 text-[7.5px] px-2 py-0.5 rounded cursor-pointer">
              7:45 PM
            </span>
            <span className="bg-white/10 text-gray-200 text-[7.5px] px-2 py-0.5 rounded cursor-pointer">
              9:00 PM
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[7.5px] text-gray-400">
          <span>📍 42 Spring Street, SoHo NYC</span>
          <span>•</span>
          <span>Valet Available</span>
        </div>
      </div>

      {/* Right Column (7 cols): Dish & Ambiance Gallery */}
      <div className="relative z-10 col-span-7 grid grid-cols-2 gap-2 h-full items-center">
        <div className="relative rounded-lg overflow-hidden h-[90%] border border-amber-900/40 shadow-xl">
          <img
            src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=500"
            alt="Dish"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-1.5 left-1.5">
            <p className="text-[7.5px] font-serif text-amber-200 font-bold">Wood-Fired Ribeye</p>
            <p className="text-[6.5px] text-gray-400">Smoked marrow & black truffle</p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 h-[90%] justify-between">
          <div className="bg-[#1f1a14] border border-amber-800/30 rounded-lg p-2 text-center">
            <span className="text-[7px] text-amber-400 font-serif">Chef's Tasting Menu</span>
            <p className="text-[9px] font-bold text-white font-serif mt-0.5">7 Courses • $145</p>
            <p className="text-[6.5px] text-gray-400">Optional sommelier pairing</p>
          </div>
          <div className="relative rounded-lg overflow-hidden h-[50%] border border-amber-900/30">
            <img
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Wine"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-[7px] font-serif text-amber-200 tracking-wider uppercase">
                400+ Natural Vintages
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom: Daily Specials Strip */}
    <div className="flex items-center justify-between px-3 py-1 bg-black border-t border-amber-950 text-[7px] text-gray-400 uppercase tracking-widest shrink-0 font-serif">
      <span>TODAY'S HARVEST: HUDSON VALLEY HERBS</span>
      <span>•</span>
      <span>DRY-AGED DUCK BREAST</span>
      <span>•</span>
      <span>CHEF MATTEO ROSSI</span>
    </div>
  </div>
);

const SageSaltTablet: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#14120f] text-white select-none overflow-hidden text-[9px] leading-tight font-serif">
    <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#1c1915] border-b border-amber-950 shrink-0">
      <span className="font-bold text-amber-200 text-[10px]">SAGE & SALT</span>
      <button className="bg-amber-600 text-white text-[7px] px-2 py-0.5 rounded">
        Reserve
      </button>
    </div>

    <div className="relative flex-1 p-2.5 flex flex-col justify-between">
      <div className="text-center">
        <span className="text-[6.5px] text-amber-400">✦ Michelin Recommended</span>
        <h2 className="italic text-[14px] text-amber-100 my-1">Honest Food & Wine</h2>
        <p className="text-[7px] text-gray-400 font-sans">Farm-to-table dining in SoHo.</p>
      </div>

      <div className="relative rounded-lg overflow-hidden aspect-[16/9] border border-amber-900/40 my-1">
        <img
          src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-1 left-2 text-[7.5px] text-amber-200 font-bold">
          Tonight's Chef Pairing
        </span>
      </div>

      <div className="bg-black/60 p-1.5 rounded border border-amber-900/30 text-center">
        <p className="text-[7px] text-amber-300">Table Reservations Available</p>
        <div className="flex justify-center gap-1.5 mt-1">
          <span className="bg-amber-600 text-[7px] px-2 py-0.5 rounded">7:00 PM</span>
          <span className="bg-white/10 text-[7px] px-2 py-0.5 rounded">8:30 PM</span>
        </div>
      </div>
    </div>
  </div>
);

const SageSaltMobile: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#14120f] text-white select-none overflow-hidden text-[8px] leading-tight font-serif">
    <div className="flex items-center justify-between px-2 py-1 bg-[#1c1915] border-b border-amber-950 shrink-0">
      <span className="font-bold text-amber-200 text-[8px]">SAGE & SALT</span>
      <span className="text-[6.5px] text-amber-400">SoHo</span>
    </div>

    <div className="relative flex-1 p-2 flex flex-col justify-between overflow-hidden">
      <div className="relative rounded-lg overflow-hidden h-[45%] border border-amber-900/40">
        <img
          src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <p className="absolute bottom-1 left-1.5 text-[8px] font-bold text-white">
          7-Course Chef Dinner
        </p>
      </div>

      <div className="flex flex-col gap-1 my-1">
        <div className="flex justify-between items-center bg-white/5 border border-amber-900/30 rounded p-1 text-[6.5px]">
          <span>Woodfire Ribeye</span>
          <span className="text-amber-400 font-bold">$68</span>
        </div>
        <div className="flex justify-between items-center bg-white/5 border border-amber-900/30 rounded p-1 text-[6.5px]">
          <span>Sommelier Wine Flight</span>
          <span className="text-amber-400 font-bold">$45</span>
        </div>
      </div>

      <button className="w-full bg-amber-600 text-white text-[7.5px] py-1 rounded shadow-md text-center">
        Reserve Dinner Table →
      </button>
    </div>

    <div className="grid grid-cols-3 px-1 py-1 bg-black border-t border-amber-950 text-center text-[5.5px] text-gray-400">
      <span className="text-amber-300">Menu</span>
      <span>Cellar</span>
      <span>Location</span>
    </div>
  </div>
);

/* ──────────────────────────────────────────────────────────────
   WEBSITE 5: PULSEFIT — 24/7 Athletic Club & Performance Lab
   Bold energetic athletic UI with neon orange, live training schedule
   ────────────────────────────────────────────────────────────── */
const PulseFitDesktop: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#0a0a0c] text-white select-none overflow-hidden text-[11px] leading-tight font-sans">
    {/* Nav: Bold Athletic Bar */}
    <div className="flex items-center justify-between px-3 py-1.5 bg-black border-b border-orange-500/30 shrink-0">
      <div className="flex items-center gap-1.5">
        <span className="text-orange-500 font-black text-[12px] italic">PULSE</span>
        <span className="font-mono text-[9px] text-white font-bold tracking-widest">// ATHLETIC</span>
      </div>
      <div className="flex items-center gap-3 text-[8.5px] font-bold uppercase tracking-wider text-gray-300">
        <span className="text-orange-400 cursor-pointer">HYROX & HIIT</span>
        <span className="hover:text-white cursor-pointer">RECOVERY LAB</span>
        <span className="hover:text-white cursor-pointer">TRAINERS</span>
        <span className="hover:text-white cursor-pointer">MEMBERSHIP</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-orange-500 hover:bg-orange-400 text-black font-black uppercase text-[8px] px-3 py-1 rounded italic shadow-md shadow-orange-500/30">
          Claim 3-Day Pass
        </button>
      </div>
    </div>

    {/* Hero: High-Octane Workout Layout */}
    <div className="relative flex-1 grid grid-cols-12 gap-3 p-3 items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-orange-950/20 to-black z-0" />

      {/* Left Column (5 cols): High Impact Headline */}
      <div className="relative z-10 col-span-5 flex flex-col justify-center">
        <span className="inline-block bg-orange-500/20 border border-orange-500/40 text-orange-400 text-[7px] font-mono font-bold uppercase px-2 py-0.5 rounded w-fit mb-1.5">
          ⚡ 24/7 BIOMETRIC FACILITY
        </span>
        <h2 className="font-black italic text-[19px] lg:text-[23px] text-white uppercase tracking-tighter leading-[1.0] mb-1.5">
          Train Without Limits.
        </h2>
        <p className="text-[8px] text-gray-400 leading-relaxed mb-2.5">
          Olympic platforms, cold plunge contrast therapy, biometric nutrition, and elite coaching built for competitive athletes.
        </p>
        <div className="flex items-center gap-2 mb-2">
          <button className="bg-orange-500 text-black font-black uppercase text-[8.5px] px-3.5 py-1.5 rounded italic shadow-lg shadow-orange-500/40">
            Join The Club →
          </button>
          <button className="border border-white/20 text-white font-bold text-[8px] px-2.5 py-1.5 rounded bg-white/5">
            Class Schedule
          </button>
        </div>
        <div className="flex items-center gap-2 text-[7.5px] font-mono text-gray-300">
          <span className="text-orange-400 font-bold">50+</span> Weekly Classes
          <span>•</span>
          <span className="text-orange-400 font-bold">Sauna</span> Recovery
        </div>
      </div>

      {/* Right Column (7 cols): Trainer Spotlight + Live Class Tag */}
      <div className="relative z-10 col-span-7 grid grid-cols-2 gap-2 h-full items-center">
        <div className="relative rounded-lg overflow-hidden h-[90%] border border-orange-500/40 shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=500"
            alt="Gym"
            className="w-full h-full object-cover filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-1.5 left-1.5">
            <span className="bg-orange-500 text-black text-[6.5px] font-black uppercase px-1 rounded">
              HEAD COACH
            </span>
            <p className="text-[8px] font-black text-white mt-0.5">Marcus Vance</p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 h-[90%] justify-between">
          <div className="bg-[#171412] border border-orange-500/30 rounded-lg p-2">
            <span className="text-[6.5px] font-mono text-orange-400">UPCOMING CLASS:</span>
            <p className="text-[9.5px] font-black text-white italic mt-0.5">HYROX POWER HOUR</p>
            <p className="text-[6.5px] text-gray-400">Today at 5:30 PM • 3 Spots Left</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
            <p className="text-[12px] font-black text-orange-400">0°C ICE BATH</p>
            <p className="text-[6.5px] text-gray-300">Contrast recovery suite included</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="flex items-center justify-between px-3 py-1 bg-black border-t border-orange-950 text-[7px] font-mono text-gray-400 uppercase shrink-0">
      <span>// ELEIKO PLATFORMS</span>
      <span>•</span>
      <span>CONTRAST PLUNGE</span>
      <span>•</span>
      <span>INBODY COMPOSITION</span>
      <span>•</span>
      <span>24/7 ALL-ACCESS</span>
    </div>
  </div>
);

const PulseFitTablet: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#0a0a0c] text-white select-none overflow-hidden text-[9px] leading-tight font-sans">
    <div className="flex items-center justify-between px-2.5 py-1.5 bg-black border-b border-orange-500/30 shrink-0">
      <span className="font-black italic text-orange-500 text-[11px]">PULSE // ATHLETIC</span>
      <button className="bg-orange-500 text-black font-black uppercase text-[7px] px-2 py-0.5 rounded">
        Free Pass
      </button>
    </div>

    <div className="relative flex-1 p-2.5 flex flex-col justify-between">
      <div>
        <span className="text-[6.5px] font-mono text-orange-400 bg-orange-950 px-1.5 py-0.5 rounded">
          ⚡ High Performance Club
        </span>
        <h2 className="text-[14px] font-black italic uppercase text-white mt-1">
          TRAIN LIKE A PRO
        </h2>
        <p className="text-[7px] text-gray-400 mt-0.5">24/7 gym & recovery plunge.</p>
      </div>

      <div className="relative rounded-lg overflow-hidden aspect-[16/9] border border-orange-500/40 my-1">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-1 left-2 bg-black/70 px-1.5 py-0.5 rounded">
          <p className="text-[7px] font-black text-orange-400">Next Class: HIIT (5:30 PM)</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5 text-center text-[7px] font-mono">
        <div className="bg-white/5 p-1 rounded border border-white/10">
          <p className="text-orange-400 font-bold">Open 24/7</p>
          <p className="text-[6px] text-gray-400">Biometric Access</p>
        </div>
        <div className="bg-white/5 p-1 rounded border border-white/10">
          <p className="text-orange-400 font-bold">Cold Plunge</p>
          <p className="text-[6px] text-gray-400">Sauna & Recovery</p>
        </div>
      </div>
    </div>
  </div>
);

const PulseFitMobile: React.FC = () => (
  <div className="w-full h-full flex flex-col bg-[#0a0a0c] text-white select-none overflow-hidden text-[8px] leading-tight font-sans">
    <div className="flex items-center justify-between px-2 py-1 bg-black border-b border-orange-500/30 shrink-0">
      <span className="font-black italic text-orange-400 text-[8.5px]">PULSE</span>
      <span className="text-[6px] font-mono bg-orange-950 text-orange-400 px-1 rounded">24/7</span>
    </div>

    <div className="relative flex-1 p-2 flex flex-col justify-between overflow-hidden">
      <div>
        <p className="text-[6px] font-mono text-orange-400">// ATHLETIC CLUB</p>
        <p className="text-[12px] font-black italic uppercase text-white">BUILD POWER</p>
      </div>

      <div className="bg-[#171412] border border-orange-500/30 rounded p-1.5 my-1">
        <p className="text-[6px] font-mono text-gray-400 mb-0.5">Live Schedule</p>
        <p className="text-[7.5px] font-bold text-white">CrossFit WOD (6:00 PM)</p>
        <p className="text-[6px] text-orange-400">Coach Marcus • 2 Spots Open</p>
      </div>

      <button className="w-full bg-orange-500 text-black font-black uppercase text-[7.5px] py-1 rounded shadow-md text-center">
        Claim 3-Day Pass →
      </button>
    </div>

    <div className="grid grid-cols-3 px-1 py-1 bg-black border-t border-orange-950 text-center text-[5.5px] text-gray-400 font-mono">
      <span className="text-orange-400">Schedule</span>
      <span>Pass</span>
      <span>Locker</span>
    </div>
  </div>
);

/* ──────────────────────────────────────────────────────────────
   SLIDE DEFINITION TABLE
   ────────────────────────────────────────────────────────────── */
interface SlideItem {
  id: string;
  name: string;
  domain: string;
  category: string;
  headline: string;
  desktopView: React.ReactNode;
  tabletView: React.ReactNode;
  mobileView: React.ReactNode;
}

const showcaseSlides: SlideItem[] = [
  {
    id: 'velour',
    name: 'Velour Studio',
    domain: 'velour-studio.com',
    category: 'Haute Couture Salon & Spa',
    headline: 'Editorial luxury beauty with bespoke lookbook & VIP reservations',
    desktopView: <VelourDesktop />,
    tabletView: <VelourTablet />,
    mobileView: <VelourMobile />,
  },
  {
    id: 'datapulse',
    name: 'DataPulse Cloud',
    domain: 'datapulse.io',
    category: 'SaaS Analytics & Cloud Telemetry',
    headline: 'High-tech platform with live SVG telemetry chart & cluster monitoring',
    desktopView: <DataPulseDesktop />,
    tabletView: <DataPulseTablet />,
    mobileView: <DataPulseMobile />,
  },
  {
    id: 'estatenoir',
    name: 'Estate Noir',
    domain: 'estatenoir.com',
    category: 'Luxury Architecture & Real Estate',
    headline: 'Panoramic architectural showcase with floating property search filter bar',
    desktopView: <EstateNoirDesktop />,
    tabletView: <EstateNoirTablet />,
    mobileView: <EstateNoirMobile />,
  },
  {
    id: 'sagesalt',
    name: 'Sage & Salt',
    domain: 'sageandsaltbistro.com',
    category: 'Michelin-Guide Farm-to-Table Bistro',
    headline: 'Artisan culinary experience with live table reservation selector',
    desktopView: <SageSaltDesktop />,
    tabletView: <SageSaltTablet />,
    mobileView: <SageSaltMobile />,
  },
  {
    id: 'pulsefit',
    name: 'Pulse Athletic',
    domain: 'pulsefitclub.com',
    category: '24/7 Athletic Performance Club',
    headline: 'High-octane gym UI with real-time class schedule & trainer roster',
    desktopView: <PulseFitDesktop />,
    tabletView: <PulseFitTablet />,
    mobileView: <PulseFitMobile />,
  },
];

// Must match the 800ms showcase-* animations in tailwind.config.js.
const SLIDE_MS = 800;

/* One full set of devices (tablet · desktop · phone) showing a single project.
   Rendered twice during a change: the outgoing set slides out while the
   incoming set, with the next project's design, slides in. */
const DeviceGroup: React.FC<{ slide: SlideItem }> = ({ slide }) => (
  <>
    {/* ─── Tablet Device (Left, z-20) ─── */}
    <div className="hidden md:block relative z-20 -mr-6 lg:-mr-8 mb-2 self-end transform -rotate-3 hover:rotate-0 transition-transform duration-500">
      <div className="relative w-[210px] lg:w-[245px]">
        <div className="bg-gray-800/95 rounded-[1.5rem] p-2.5 shadow-2xl shadow-black/90 border border-gray-700/80 ring-1 ring-white/10">
          {/* Tablet Camera Notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-700 rounded-full z-20" />

          {/* Tablet Screen Container */}
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-950">
            {slide.tabletView}
          </div>
        </div>

        {/* Device Label */}
        <div className="text-center mt-3">
          <span className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full border border-white/5">
            Tablet (3:4)
          </span>
        </div>
      </div>
    </div>

    {/* ─── Desktop Monitor (Center, z-10) ─── */}
    <div className="relative z-10">
      <div className="relative w-[340px] sm:w-[460px] md:w-[540px] lg:w-[640px]">
        {/* Monitor Screen Frame */}
        <div className="bg-gray-800/95 rounded-t-2xl p-2.5 shadow-2xl shadow-black/95 border border-gray-700/80 border-b-0 ring-1 ring-white/10">
          {/* Browser Top Window Bar */}
          <div className="flex items-center gap-1.5 mb-2 px-1">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 mx-2">
              <div className="h-5 bg-gray-900/90 rounded-md flex items-center px-3 border border-white/10">
                <span className="text-[9px] text-gray-300 font-mono truncate">
                  https://{slide.domain}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Screen Content */}
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-gray-950">
            {slide.desktopView}
          </div>
        </div>

        {/* Realistic Monitor Stand */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-sm border-x border-b border-gray-600/50" />
          <div className="w-44 h-2.5 bg-gradient-to-b from-gray-700 via-gray-600 to-gray-800 rounded-b-lg shadow-2xl border-b border-gray-500/40" />
        </div>

        {/* Device Label */}
        <div className="text-center mt-3">
          <span className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full border border-white/5">
            Desktop Monitor (16:10)
          </span>
        </div>
      </div>
    </div>

    {/* ─── Phone Device (Right, z-30 — IN FRONT so it's 100% visible!) ─── */}
    <div className="hidden sm:block relative z-30 -ml-6 lg:-ml-8 mb-2 self-end transform rotate-3 hover:rotate-0 transition-transform duration-500">
      <div className="relative w-[115px] md:w-[130px] lg:w-[150px]">
        {/* Phone Outer Shell */}
        <div className="bg-gray-800/95 rounded-[1.8rem] p-2 shadow-2xl shadow-black/95 border border-gray-700/80 ring-1 ring-white/10">
          {/* Phone Speaker Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-gray-800 rounded-b-xl z-20 flex items-center justify-center">
            <div className="w-6 h-1 bg-gray-700 rounded-full" />
          </div>

          {/* Phone Screen Container */}
          <div className="relative w-full aspect-[9/19] rounded-[1.3rem] overflow-hidden bg-gray-950">
            {slide.mobileView}
          </div>
        </div>

        {/* Device Label */}
        <div className="text-center mt-3">
          <span className="text-[10.5px] font-bold text-gray-400 uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full border border-white/5">
            Mobile (9:19)
          </span>
        </div>
      </div>
    </div>
  </>
);

/* ──────────────────────────────────────────────────────────────
   MAIN COMPONENT: Device Showcase Slider
   ────────────────────────────────────────────────────────────── */
const DeviceShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // The set currently sliding out, and which way the carousel is moving.
  const [outgoing, setOutgoing] = useState<{ index: number; direction: 'next' | 'prev' } | null>(null);
  // Ref guard keeps goToSlide stable — otherwise the auto-advance timer below
  // can capture a stale "animating" flag and silently skip the move.
  const animatingRef = useRef(false);

  const goToSlide = useCallback((from: number, to: number, direction: 'next' | 'prev') => {
    if (animatingRef.current || from === to) return;
    animatingRef.current = true;
    setOutgoing({ index: from, direction });
    setActiveIndex(to);
    setTimeout(() => {
      animatingRef.current = false;
      setOutgoing(null);
    }, SLIDE_MS);
  }, []);

  const goNext = useCallback(() => {
    goToSlide(activeIndex, (activeIndex + 1) % showcaseSlides.length, 'next');
  }, [activeIndex, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide(activeIndex, (activeIndex - 1 + showcaseSlides.length) % showcaseSlides.length, 'prev');
  }, [activeIndex, goToSlide]);

  // Auto-advance: 0.8s slide + ~3.7s on screen. Keyed on activeIndex (via
  // goNext) so the countdown restarts after any change, including manual clicks.
  // Deliberately not paused on hover: the section fills most of the viewport,
  // so a hover pause meant it almost never moved while someone was viewing it.
  useEffect(() => {
    const timer = setTimeout(goNext, 4500);
    return () => clearTimeout(timer);
  }, [goNext]);

  const current = showcaseSlides[activeIndex];

  return (
    <section
      className="relative py-16 md:py-24 bg-gradient-to-b from-black via-gray-950 to-white dark:to-black overflow-hidden"
    >
      {/* Background Ambience Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored UX/UI Architecture</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            <span className="heading">Bespoke Websites Engineered for</span>{' '}
            <span className="text-primary">Every Device</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            We don't use cookie-cutter templates. Every project features custom layouts, tailored UX workflows, and responsive architectures across desktop, tablet, and mobile.
          </p>
        </div>

        {/* Device Mockup Display Container */}
        <div className="relative max-w-6xl mx-auto pt-2">
          {/* Navigation Arrow - Left */}
          <button
            onClick={goPrev}
            aria-label="Previous project"
            className="absolute left-0 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-gray-900/90 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Sliding stage: during a change the outgoing set is overlaid and
              slides away, while the incoming set (which sets the height) slides
              in from the other side with the next project's design. */}
          <div className="relative">
            {outgoing && (
              <div
                key={`out-${outgoing.index}`}
                aria-hidden="true"
                className={`absolute inset-0 flex items-end justify-center pointer-events-none ${
                  outgoing.direction === 'next' ? 'animate-showcase-out-left' : 'animate-showcase-out-right'
                }`}
              >
                <DeviceGroup slide={showcaseSlides[outgoing.index]} />
              </div>
            )}
            <div
              key={`in-${activeIndex}`}
              className={`flex items-end justify-center ${
                outgoing
                  ? outgoing.direction === 'next'
                    ? 'animate-showcase-in-right'
                    : 'animate-showcase-in-left'
                  : ''
              }`}
            >
              <DeviceGroup slide={current} />
            </div>
          </div>

          {/* Navigation Arrow - Right */}
          <button
            onClick={goNext}
            aria-label="Next project"
            className="absolute right-0 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-gray-900/90 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default DeviceShowcase;
