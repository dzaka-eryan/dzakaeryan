'use client'

import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}
const getSnapshot = () => new Date().getFullYear()
const getServerSnapshot = () => 2026

export function FooterYear() {
  const year = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return <span>{year}</span>
}
