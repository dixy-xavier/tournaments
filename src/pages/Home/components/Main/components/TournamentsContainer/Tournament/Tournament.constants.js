import React from 'react';
import { FaGamepad, FaMapMarkerAlt, FaRegCalendarAlt, FaTrophy } from 'react-icons/fa';

export const TOURNAMENT_LABELS = [
  {
    id: 1,
    name: ['name'],
    label: 'Name',
    icon: <FaTrophy />,
  },
  {
    id: 2,
    name: ['city'],
    label: 'City',
    icon: <FaMapMarkerAlt />,
  },
  {
    id: 3,
    name: ['country'],
    label: 'Country',
    icon: <FaMapMarkerAlt />,
  },
  {
    id: 4,
    name: ['date_start'],
    label: 'Start Date',
    icon: <FaRegCalendarAlt />,
  },
  {
    id: 5,
    name: ['date_end'],
    label: 'End Date',
    icon: <FaRegCalendarAlt />,
  },
];

export const SERIES_LABELS = [
  {
    id: 6,
    name: ['series', 'name'],
    label: 'Series',
    icon: <FaGamepad />,
  },
  {
    id: 7,
    name: ['series', 'date_start'],
    label: 'Start Date',
    icon: <FaRegCalendarAlt />,
  },
  {
    id: 8,
    name: ['series', 'date_end'],
    label: 'End Date',
    icon: <FaRegCalendarAlt />,
  },
];
