import HirukoProBook from './HirukoProBook.otf';

const CustomFonts = `
  @font-face {
    font-family: 'HirukoProBook';
    src: local('HirukoProBook'),
    url(${HirukoProBook}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }
`;

export { HirukoProBook, CustomFonts };
