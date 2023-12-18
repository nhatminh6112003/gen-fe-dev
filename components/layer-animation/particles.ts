import { ISourceOptions } from 'tsparticles-engine';

const json: ISourceOptions = {
  particles: {
    number: {
      value: 80, // Adjust this based on your needs
      density: {
        enable: true,
        value_area: 500 // Adjust this based on your needs
      }
    },
    color: {
      value: '#000000'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.2,
      random: false,
      anim: {
        enable: false,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#000000',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 30,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

const particlesOptions = {
  fpsLimit: 60,
  interactivity: {
    detect_on: 'window',
    events: {
      onclick: { enable: false, mode: 'push' },
      onhover: {
        enable: true,
        //mode: "repulse",
        parallax: { enable: true, force: 150, smooth: 20 },
        speed: 0.2
      },
      resize: true
    },
    modes: {
      bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
      grab: { distance: 400, links: { opacity: 1 } },
      push: { quantity: 4 },
      remove: { quantity: 2 },
      repulse: { distance: 150, duration: 0.4 }
    }
  },
  particles: {
    color: { value: '#ffffff' },
    links: {
      color: 'random',
      distance: 150,
      enable: false,
      opacity: 0.4,
      width: 1
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: 'none',
      enable: true,
      out_mode: 'out',
      random: false,
      speed: 0.2,
      straight: false
    },
    rotate: {
      animation: {
        enable: false,
        speed: 10,
        sync: false
      }
    },
    number: { density: { enable: true, area: 300 }, value: 125 },
    opacity: {
      animation: { enable: true, minimumValue: 0.5, speed: 0.5, sync: false },
      random: false,
      value: 1
    },
    shape: {
      character: [
        {
          fill: true,
          font: 'Verdana',
          style: '',
          value: ['a', 't', 'c', 'g', 'A', 'T', 'C', 'G', '+', '-'],
          weight: '400'
        },
        {
          fill: false,
          font: 'Verdana',
          style: '',
          value: ['a', 't', 'c', 'g', 'A', 'T', 'C', 'G', '+', '-'],
          weight: '400'
        }
      ],
      image: {
        height: 100,
        replace_color: true,
        src: 'images/github.svg',
        width: 100
      },
      polygon: { nb_sides: 5 },
      stroke: { color: '#ffffff', width: 1 },
      type: 'char'
    },
    size: {
      anim: { enable: true, minimumValue: 4, speed: 7 },
      random: { minimumValue: 4, enable: true },
      value: 12
    }
  },
  detectRetina: true
};

export { particlesOptions };
export default json;
