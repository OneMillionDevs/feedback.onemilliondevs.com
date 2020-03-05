/** @jsx jsx */
// import React from 'react';
import ReactPlayer from 'react-player';
import {jsx} from 'theme-ui';

/* --- Component --- */
export const Video = ({url, sx}) => <ReactPlayer url={url} sx={sx} />;

export default Video;
