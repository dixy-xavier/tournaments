import React from 'react';
import { FaGamepad, FaMapMarkerAlt, FaRegCalendarAlt, FaTrophy } from 'react-icons/fa';

export default [
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
    name: ['series', 'name'],
    label: 'Series',
    icon: <FaGamepad />,
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

const BASE_URL = 'http://localhost:3000';
export const GET_TOURNAMENTS = `${BASE_URL}/tournaments`;
