import styled from 'styled-components';

export const IconWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  height: ${(props: any) => props['data-size'] || '15px'};
  justify-content: center;
  width: ${(props: any) => props['data-size'] || '15px'};
  .icon {
    fill: ${(props: any) => props['data-fill'] || '#000'};
    height: ${(props: any) => props['data-height'] || props['data-size']};
    width: ${(props: any) => props['data-width'] || props['data-size']};
  }
`;
