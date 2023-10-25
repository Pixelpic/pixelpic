import { ColorCreateInput } from '.keystone/types';

const ALPHA = Array.from(Array(26)).map((e, i) => i + 65);

const ALPHABET = ALPHA.map((x) => String.fromCharCode(x));

export const COLORS: Required<ColorCreateInput>[] = [
  { HEX: '#f7f0e3' },
  { HEX: '#bfc3c9' },
  { HEX: '#959ba3' },
  { HEX: '#7e7a85' },
  { HEX: '#4b4c50' },
  { HEX: '#302e32' },
  { HEX: '#523e37' },
  { HEX: '#73483a' },
  { HEX: '#ab5827' },
  { HEX: '#b37c51' },
  { HEX: '#de9064' },
  { HEX: '#eca279' },
  { HEX: '#f1b993' },
  { HEX: '#ebc0a4' },
  { HEX: '#ffd7c3' },
  { HEX: '#fdede7' },
  { HEX: '#dfc790' },
  { HEX: '#ffd300' },
  { HEX: '#fff076' },
  { HEX: '#cbf193' },
  { HEX: '#9cbb27' },
  { HEX: '#00a64d' },
  { HEX: '#00863a' },
  { HEX: '#1a4d3b' },
  { HEX: '#749883' },
  { HEX: '#c1efe3' },
  { HEX: '#93bce6' },
  { HEX: '#58a3da' },
  { HEX: '#0094d0' },
  { HEX: '#0065b2' },
  { HEX: '#23415d' },
  { HEX: '#ae78c2' },
  { HEX: '#c0aedf' },
  { HEX: '#edaad6' },
  { HEX: '#cd2928' },
  { HEX: '#853433' },
  { HEX: '#e27ba2' },
  { HEX: '#e14585' },
  { HEX: '#e18b80' },
  { HEX: '#9899b3' },
  { HEX: '#7474ba' },
  { HEX: '#aa8b6e' },
  { HEX: '#ecd7d5' },
  { HEX: '#f2962f' },
  { HEX: '#fff999' },
  { HEX: '#e7b067' },
  { HEX: '#1e4b70' },
  { HEX: '#2675a5' },
  { HEX: '#5482be' },
  { HEX: '#445c37' },
  { HEX: '#99a444' },
  { HEX: '#56852f' },
  { HEX: '#70ad92' },
  { HEX: '#97d4b7' },
  { HEX: '#bccfdf' },
  { HEX: '#96accb' },
  { HEX: '#778b98' },
  { HEX: '#576c7a' },
  { HEX: '#ffae11' }
].map(({ HEX }, index) => {
  const int = Math.trunc(index / ALPHABET.length);
  const name = (() => {
    if (!int) {
      return ALPHABET[index];
    }
    return ALPHABET[int - 1] + ALPHABET[index % ALPHABET.length];
  })();
  return {
    name,
    HEX,
  };
});
