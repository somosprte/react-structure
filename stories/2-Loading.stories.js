import React from 'react';
import { Loading } from 'components';

export default {
  title: 'Layout|Loading',
};

export const standard = () => <Loading />;

export const table = () => <Loading table />;

export const container = () => <Loading container />;

export const button = () => <Loading type="button" />;
