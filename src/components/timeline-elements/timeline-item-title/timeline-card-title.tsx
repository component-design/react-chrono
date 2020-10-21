import React from 'react';
import { Theme } from '../../../models/Theme';
import { TitleWrapper } from './timeline-card-title.styles';

interface TitleModel {
  title?: string;
  active?: boolean;
  theme?: Theme;
}

const TimelineItemTitle: React.FunctionComponent<TitleModel> = ({
  title,
  active,
  theme,
}: TitleModel) => (
  <TitleWrapper className={active ? 'active' : ''} title={title} theme={theme}>
    {title}
  </TitleWrapper>
);

export default TimelineItemTitle;