import { ColorCreateInput } from '.keystone/types';

const ALPHA = Array.from(Array(26)).map((e, i) => i + 65);

const ALPHABET = ALPHA.map((x) => String.fromCharCode(x));

export const COLORS: Required<ColorCreateInput>[] = [
  { red: 247, green: 240, blue: 227, hex: '#f7f0e3' },
  { red: 191, green: 195, blue: 201, hex: '#C9C3BF' },
  { red: 149, green: 155, blue: 163, hex: '#959C9A' },
  { red: 126, green: 122, blue: 133, hex: '#7e7a85' },
  { red: 75, green: 76, blue: 80, hex: '#4b4c50' },
  { red: 48, green: 46, blue: 50, hex: '#302e32' },
  { red: 82, green: 62, blue: 55, hex: '#523e37' },
  { red: 115, green: 72, blue: 58, hex: '#73483a' },
  { red: 171, green: 88, blue: 39, hex: '#ab5827' },
  { red: 179, green: 124, blue: 81, hex: '#b37c51' },
  { red: 222, green: 144, blue: 100, hex: '#de9064' },
  { red: 236, green: 162, blue: 121, hex: '#eca279' },
  { red: 241, green: 185, blue: 147, hex: '#f1b993' },
  { red: 235, green: 192, blue: 164, hex: '#ebc0a4' },
  { red: 255, green: 215, blue: 195, hex: '#ffd7c3' },
  { red: 253, green: 237, blue: 231, hex: '#fdede7' },
  { red: 223, green: 199, blue: 144, hex: '#dfc790' },
  { red: 255, green: 211, blue: 0, hex: '#ffd300' },
  { red: 255, green: 240, blue: 118, hex: '#fff076' },
  { red: 203, green: 241, blue: 147, hex: '#cbf193' },
  { red: 156, green: 187, blue: 39, hex: '#9cbb27' },
  { red: 0, green: 166, blue: 77, hex: '#00a64d' },
  { red: 0, green: 134, blue: 58, hex: '#00863a' },
  { red: 26, green: 77, blue: 59, hex: '#1a4d3b' },
  { red: 116, green: 152, blue: 131, hex: '#749883' },
  { red: 193, green: 239, blue: 227, hex: '#c1efe3' },
  { red: 147, green: 188, blue: 230, hex: '#93bce6' },
  { red: 88, green: 163, blue: 218, hex: '#58a3da' },
  { red: 0, green: 148, blue: 208, hex: '#0094d0' },
  { red: 0, green: 101, blue: 178, hex: '#0065b2' },
  { red: 35, green: 65, blue: 93, hex: '#23415d' },
  { red: 174, green: 120, blue: 194, hex: '#ae78c2' },
  { red: 192, green: 174, blue: 223, hex: '#c0aedf' },
  { red: 237, green: 170, blue: 214, hex: '#edaad6' },
  { red: 205, green: 41, blue: 40, hex: '#cd2928' },
  { red: 133, green: 52, blue: 51, hex: '#853433' },
  { red: 226, green: 123, blue: 162, hex: '#e27ba2' },
  { red: 225, green: 69, blue: 133, hex: '#e14585' },
  { red: 225, green: 139, blue: 128, hex: '#e18b80' },
  { red: 152, green: 153, blue: 179, hex: '#9899b3' },
  { red: 116, green: 116, blue: 186, hex: '#7474ba' },
  { red: 170, green: 139, blue: 110, hex: '#aa8b6e' },
  { red: 236, green: 215, blue: 213, hex: '#ecd7d5' },
  { red: 242, green: 150, blue: 47, hex: '#f2962f' },
  { red: 255, green: 249, blue: 153, hex: '#fff999' },
  { red: 231, green: 176, blue: 103, hex: '#e7b067' },
  { red: 30, green: 75, blue: 112, hex: '#1e4b70' },
  { red: 38, green: 117, blue: 165, hex: '#2675a5' },
  { red: 84, green: 130, blue: 190, hex: '#5482be' },
  { red: 68, green: 92, blue: 55, hex: '#445c37' },
  { red: 153, green: 164, blue: 68, hex: '#99a444' },
  { red: 86, green: 133, blue: 47, hex: '#56852f' },
  { red: 112, green: 173, blue: 146, hex: '#70ad92' },
  { red: 151, green: 212, blue: 183, hex: '#97d4b7' },
  { red: 188, green: 207, blue: 223, hex: '#bccfdf' },
  { red: 150, green: 172, blue: 203, hex: '#96accb' },
  { red: 119, green: 139, blue: 152, hex: '#778b98' },
  { red: 87, green: 108, blue: 122, hex: '#576c7a' },
].map(({ hex, ...props }, index) => {
  const int = Math.trunc(index / ALPHABET.length);
  const name = (() => {
    if (!int) {
      return ALPHABET[index];
    }
    return ALPHABET[int - 1] + ALPHABET[index % ALPHABET.length];
  })();
  return {
    ...props,
    name,
    hex: hex.toLowerCase(),
  };
});
