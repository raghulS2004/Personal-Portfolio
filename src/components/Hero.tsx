
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import { facebook, instagram, twitter } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#191919] px-0">
      <div className="relative w-full max-w-5xl mx-auto rounded-2xl shadow-xl bg-[#101010] flex flex-col md:flex-row overflow-hidden border border-[#242424] mt-12 mb-8">
        {/* Top bar */}
        <div className="absolute left-0 top-0 w-full flex justify-between items-center px-8 pt-6">
          <span className="text-2xl font-playfair text-white font-bold">Raghul S</span>
          <span className="text-sm text-muted-foreground">raghuls.dev@gmail.com</span>
        </div>
        {/* Main Content */}
        <div className="w-full md:w-1/2 px-8 pt-24 pb-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Hi,<br />
            I&apos;m <span className="text-[#f85741] font-bold font-playfair">Raghul S</span>
          </h1>
          <p className="mt-2 text-lg md:text-2xl font-medium text-[#f7a184]">Full Stack Developer</p>
          <p className="mt-4 text-base text-muted-foreground max-w-md">
            Building scalable, responsive web experiences with clean code and powerful design. 
          </p>
          <div className="mt-7 flex flex-row items-center gap-4">
            <Button size="lg" className="bg-[#f85741] hover:bg-[#d13619] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 shadow">
              Hire Me
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="mt-12 flex gap-2">
            {/* Social Links */}
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-[#fff] hover:text-[#f85741] p-2"
            >
              <facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-[#fff] hover:text-[#f85741] p-2"
            >
              <instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-[#fff] hover:text-[#f85741] p-2"
            >
              <twitter className="w-5 h-5" />
            </a>
            <span className="ml-4 text-xs text-[#f85741]">www.dribbble.com/inaya</span>
          </div>
        </div>
        {/* Photo + About */}
        <div className="w-full md:w-1/2 flex flex-col justify-between relative bg-transparent">
          {/* Accent Circles */}
          <div className="absolute right-12 top-16 z-10">
            <div className="relative">
              <span className="absolute left-12 -top-4 w-7 h-7 border-2 border-[#27d5ff] rounded-full"></span>
              <span className="absolute left-20 top-2 w-4 h-4 bg-[#27d5ff] rounded-full"></span>
            </div>
          </div>
          {/* Image */}
          <div className="mt-24 flex justify-center items-center z-20">
            <div className="rounded-full overflow-hidden border-4 border-[#222] w-56 h-56 shadow-lg bg-black">
              <img
                src="/lovable-uploads/d3cb37ee-b5e0-43e6-8f69-97c0c02d846b.png"
                alt="Raghul S"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          {/* About info */}
          <div className="flex-1 flex flex-col justify-end px-10 pb-10">
            <span className="text-sm mb-1 text-[#f7a184] font-semibold">Expert on</span>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2 leading-snug">
              Based in India<br />
              I&apos;m a developer and UI/UX designer.
            </h2>
            <p className="text-sm text-[#dedede] mb-3">
              Are you looking for a developer to build your brand and grow your business?<br />
              Let&apos;s shake hands with me.
            </p>
            <a
              href="#"
              className="text-sm font-semibold text-[#f85741] border-b-2 border-[#f85741] hover:text-white hover:border-white inline-flex gap-1 items-center w-max"
            >
              Download CV <Download className="w-4 h-4 inline" />
            </a>
          </div>
          {/* Chat Icon */}
          <div className="absolute bottom-6 right-9 flex items-center gap-2">
            <Button variant="ghost" size="icon" className="bg-[#171717] p-2 shadow border-none hover:bg-[#313131]">
              <MessageCircle className="w-6 h-6 text-[#27d5ff]" />
            </Button>
            <span className="text-xs text-muted-foreground">Let&apos;s Chat</span>
          </div>
        </div>
      </div>
      {/* Background for demo, matches sample: */}
      <div className="fixed inset-0 bg-[#191919] -z-10"></div>
    </section>
  );
};

export default Hero;
