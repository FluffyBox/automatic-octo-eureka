"use client";

import { useSyncExternalStore } from "react";

export const COOKIE_CONSENT_KEY = "cookie-consent";
const COOKIE_CONSENT_TIMESTAMP_KEY = "cookie-consent-timestamp";
const COOKIE_CONSENT_EVENT = "cookie-consent-changed";

export type ConsentValue = "accepted" | "rejected" | null;

function subscribe(callback: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): ConsentValue {
  return localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentValue;
}

function getServerSnapshot(): ConsentValue {
  return null;
}

export function useCookieConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function setCookieConsent(value: Exclude<ConsentValue, null>) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  localStorage.setItem(COOKIE_CONSENT_TIMESTAMP_KEY, new Date().toISOString());
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export function resetCookieConsent() {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  localStorage.removeItem(COOKIE_CONSENT_TIMESTAMP_KEY);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}
