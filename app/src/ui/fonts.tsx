import { css } from 'styled-components';
import * as latoRegularEot from '../assets/fonts/Lato/Lato-Regular.eot';
import * as latoRegularTtf from '../assets/fonts/Lato/Lato-Regular.ttf';
import * as latoRegularWoff from '../assets/fonts/Lato/Lato-Regular.woff';
import * as latoRegularWoff2 from '../assets/fonts/Lato/Lato-Regular.woff2';
import * as latoBlackEot from '../assets/fonts/Lato/Lato-Black.eot';
import * as latoBlackTtf from '../assets/fonts/Lato/Lato-Black.ttf';
import * as latoBlackWoff from '../assets/fonts/Lato/Lato-Black.woff';
import * as latoBlackWoff2 from '../assets/fonts/Lato/Lato-Black.woff2';
import * as latoBoldEot from '../assets/fonts/Lato/Lato-Bold.eot';
import * as latoBoldTtf from '../assets/fonts/Lato/Lato-Bold.ttf';
import * as latoBoldWoff from '../assets/fonts/Lato/Lato-Bold.woff';
import * as latoBoldWoff2 from '../assets/fonts/Lato/Lato-Bold.woff2';
import * as latoLightEot from '../assets/fonts/Lato/Lato-Light.eot';
import * as latoLightTtf from '../assets/fonts/Lato/Lato-Light.ttf';
import * as latoLightWoff from '../assets/fonts/Lato/Lato-Light.woff';
import * as latoLightWoff2 from '../assets/fonts/Lato/Lato-Light.woff2';
import * as latoThinEot from '../assets/fonts/Lato/Lato-Thin.eot';
import * as latoThinTtf from '../assets/fonts/Lato/Lato-Thin.ttf';
import * as latoThinWoff from '../assets/fonts/Lato/Lato-Thin.woff';
import * as latoThinWoff2 from '../assets/fonts/Lato/Lato-Thin.woff2';

export const styledFonts = css`
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 100;
  src: url(${latoThinEot});
  src: url(${latoThinEot}?#iefix) format('embedded-opentype'),
    url(${latoThinWoff2}) format('woff2'),
    url(${latoThinWoff}) format('woff'),
    url(${latoThinTtf}) format('truetype');
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: url(${latoLightEot});
  src: url(${latoLightEot}?#iefix) format('embedded-opentype'),
    url(${latoLightWoff2}) format('woff2'),
    url(${latoLightWoff}) format('woff'),
    url(${latoLightTtf}) format('truetype');
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url(${latoRegularEot});
  src: url(${latoRegularEot}?#iefix) format('embedded-opentype'),
    url(${latoRegularWoff2}) format('woff2'),
    url(${latoRegularWoff}) format('woff'),
    url(${latoRegularTtf}) format('truetype');
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: url(${latoBoldEot});
  src: url(${latoBoldEot}?#iefix) format('embedded-opentype'),
    url(${latoBoldWoff2}) format('woff2'),
    url(${latoBoldWoff}) format('woff'),
    url(${latoBoldTtf}) format('truetype');
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  src: url(${latoBlackEot});
  src: url(${latoBlackEot}?#iefix) format('embedded-opentype'),
    url(${latoBlackWoff2}) format('woff2'),
    url(${latoBlackWoff}) format('woff'),
    url(${latoBlackTtf}) format('truetype');
}
`;
