import React, { useState, useEffect, useRef } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import gjsBlocksBasic from 'grapesjs-blocks-basic';


const Services = () => {


  const grapesJsRef = useRef(null);

  useEffect(() => {
    if (grapesJsRef.current) {
      const editor = grapesjs.init({
        container: grapesJsRef.current,
        fromElement: false,
        height: '500px',
        width: 'auto',
        storageManager: false,
        plugins: [gjsPresetWebpage, gjsBlocksBasic],
        pluginsOpts: {
          gjsPresetWebpage: {},
          gjsBlocksBasic: {},
        },
        panels: { defaults: [] },
        deviceManager: {
          devices: [
            {
              name: 'Desktop',
              width: '',
            },
            {
              name: 'Mobile',
              width: '320px',
              widthMedia: '480px',
            },
          ],
        },
      });

      editor.on('load', () => {
        editor.refresh();
      });
    }
  }, []);

  return (
    <div className="flex justify-between items-start w-full">



      <div className="w-full mt-10 h-96" style={{ position: 'relative', zIndex: 10 }}>
        <div id="gjs" ref={grapesJsRef} className="w-full h-full"></div>
      </div>
    </div>
  );
};

export default Services;
