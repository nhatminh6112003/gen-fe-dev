import React, { FC } from 'react';
import particlesOptions, { particlesOptions as options } from './particles';
import useDevice from '@/hooks/useDevice';

interface Props {}
const cdn = `https://cdn.jsdelivr.net/npm/tsparticles@1.28.0/dist/tsparticles.min.js`;

const ParticlesInIframe: FC<Props> = ({}) => {
  const { isDesktop } = useDevice();
  const bg = (
    <div
      className="bg-frame absolute top-0 left-0 bottom-0 right-0"
      style={{ zIndex: 1 }}
    >
      <iframe
        className="h-full"
        style={{
          width: '100%'
        }}
        srcDoc={`
              <html style="
              overflow: hidden;
          ">
              <div id="tsparticles_bg" style="height:100vh; width: 100%; opacity: 0.7; ${
                isDesktop
                  ? '-webkit-mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 60%); mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 60%);'
                  : ''
              }">
              </div>
              <script src="${cdn}"></script>
              <script>
                particlesJS('tsparticles_bg', ${JSON.stringify(options)});
              </script>
              </html>
        `}
      />
    </div>
  );
  return (
    <div className="flex min-h-[60vh] w-full justify-end relative">
      <div
        className="w-full sm:w-2/3 lg:w-3/4 xl:w-3/5 min-h-[60vh]  relative md:bg-cover bg-contain"
        style={{
          backgroundImage: `url('/home-banner2.gif')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          zIndex: 2
        }}
      >
        {/* <iframe
          style={{
            height: '70vh',
            width: '100%'
          }}
          srcDoc={`
          <html>
              <div id="tsparticles" style='height:100vh; width: 100%' >
              </div>
              <script src="${cdn}"></script>
              <script>
                particlesJS('tsparticles', ${JSON.stringify(particlesOptions)});
              </script>
          </html>
        `}
        /> */}
      </div>
      {bg}
    </div>
  );
};

export default ParticlesInIframe;
