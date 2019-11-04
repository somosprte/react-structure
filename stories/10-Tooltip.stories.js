import React from 'react';
import { Tooltip, Button } from 'components';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Layout|Tooltip',
};

export const standard = () => (
  <Tooltip
    id="standard"
    tip={
      <div>
        <span>Standard tip</span>
      </div>
    }
  >
    <Button onClick={action('clicked')}>Hover me</Button>
  </Tooltip>
);

export const bottom = () => (
  <Tooltip
    id="bottom"
    place="bottom"
    tip={
      <div>
        <span>bottom tip</span>
      </div>
    }
  >
    <Button onClick={action('clicked')}>Hover me</Button>
  </Tooltip>
);

export const light = () => (
  <Tooltip
    id="light"
    type="light"
    tip={
      <div>
        <span>light tip</span>
      </div>
    }
  >
    <Button onClick={action('clicked')}>Hover me</Button>
  </Tooltip>
);

export const success = () => (
  <Tooltip
    id="success"
    type="success"
    tip={
      <div>
        <span>success tip</span>
      </div>
    }
  >
    <Button onClick={action('clicked')}>Hover me</Button>
  </Tooltip>
);

export const error = () => (
  <Tooltip
    id="error"
    type="error"
    tip={
      <div>
        <span>error tip</span>
      </div>
    }
  >
    <Button onClick={action('clicked')}>Hover me</Button>
  </Tooltip>
);

export const warning = () => (
  <Tooltip
    id="warning"
    type="warning"
    tip={
      <div>
        <span>warning tip</span>
      </div>
    }
  >
    <Button onClick={action('clicked')}>Hover me</Button>
  </Tooltip>
);

export const float = () => (
  <Tooltip
    id="float"
    effect="float"
    tip={
      <div>
        <span>float tip</span>
      </div>
    }
  >
    <Button onClick={action('clicked')}>Hover me</Button>
  </Tooltip>
);

export const border = () => (
  <Tooltip
    id="border"
    border
    tip={
      <div>
        <span>border tip</span>
      </div>
    }
  >
    <Button onClick={action('clicked')}>Hover me</Button>
  </Tooltip>
);

export const disable = () => (
  <Tooltip
    id="disable"
    disable
    tip={
      <div>
        <span>disable tip</span>
      </div>
    }
  >
    <Button onClick={action('clicked')}>Hover me</Button>
  </Tooltip>
);
