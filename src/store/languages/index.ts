'use client';
import { atom } from 'jotai';

const storedLanguage =
  typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en';

export const languageAtom = atom(storedLanguage);
