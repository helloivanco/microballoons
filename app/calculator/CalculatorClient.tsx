'use client';

import { ChangeEvent, useMemo, useState } from 'react';

const PAGE_TITLE = 'Microballoon Mix Converter';
const META_DESCRIPTION =
  'Convert legacy microballoon (purchased before March 2026) resin formulas into the updated mix instantly with this calculator.';
const OLD_MB_DENSITY = 0.22;
const NEW_MB_DENSITY = 0.2;
const RESIN_DENSITY = 1.12;
const LOST_VOLUME = 1.71;

type OldInputs = {
  partA: number;
  partB: number;
  microballoons: number;
};

type DerivedMetrics = {
  totalOldMass: number;
  oldPercentage: number;
  oldMicroVolume: number;
  adjustedMicroVolume: number;
  newMicroMass: number;
  resinAddition: number;
  totalNewResinMass: number;
  newPartA: number;
  newPartB: number;
  totalNewMass: number;
  newPercentage: number;
};

const defaultInputs: OldInputs = {
  partA: 10,
  partB: 10,
  microballoons: 6.8,
};

const formatNumber = (value: number) => {
  if (!Number.isFinite(value)) {
    return '0.00';
  }

  return value.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
};

export default function CalculatorClient() {
  const [oldInputs, setOldInputs] = useState<OldInputs>(defaultInputs);

  const handleInputChange =
    (field: keyof OldInputs) => (event: ChangeEvent<HTMLInputElement>) => {
      const parsedValue = Number.parseFloat(event.currentTarget.value);
      const safeValue =
        Number.isFinite(parsedValue) && parsedValue >= 0 ? parsedValue : 0;

      setOldInputs((previous) => ({
        ...previous,
        [field]: safeValue,
      }));
    };

  const metrics = useMemo<DerivedMetrics>(() => {
    const { partA, partB, microballoons } = oldInputs;

    const totalOldResinMass = partA + partB;
    const totalOldMass = totalOldResinMass + microballoons;
    const oldPercentage =
      totalOldResinMass === 0 ? 0 : (microballoons / totalOldResinMass) * 100;

    const oldMicroVolume = microballoons / OLD_MB_DENSITY;
    const adjustedMicroVolume = Math.max(oldMicroVolume - LOST_VOLUME, 0);
    const newMicroMass = adjustedMicroVolume * NEW_MB_DENSITY;

    const resinAddition = LOST_VOLUME * RESIN_DENSITY;
    const totalNewResinMass = totalOldResinMass + resinAddition;

    if (totalOldResinMass === 0) {
      const newPercentage =
        totalNewResinMass === 0 ? 0 : (newMicroMass / totalNewResinMass) * 100;
      const totalNewMass = totalNewResinMass + newMicroMass;

      return {
        totalOldMass,
        oldPercentage,
        oldMicroVolume,
        adjustedMicroVolume,
        newMicroMass,
        resinAddition,
        totalNewResinMass,
        newPartA: totalNewResinMass / 2,
        newPartB: totalNewResinMass / 2,
        totalNewMass,
        newPercentage,
      };
    }

    const ratioPartA = partA / totalOldResinMass;
    const ratioPartB = partB / totalOldResinMass;

    const newPartA = totalNewResinMass * ratioPartA;
    const newPartB = totalNewResinMass * ratioPartB;
    const newPercentage =
      totalNewResinMass === 0 ? 0 : (newMicroMass / totalNewResinMass) * 100;
    const totalNewMass = newPartA + newPartB + newMicroMass;

    return {
      totalOldMass,
      oldPercentage,
      oldMicroVolume,
      adjustedMicroVolume,
      newMicroMass,
      resinAddition,
      totalNewResinMass,
      newPartA,
      newPartB,
      totalNewMass,
      newPercentage,
    };
  }, [oldInputs]);

  const inputConfigs = [
    {
      id: 'old-part-a',
      field: 'partA' as const,
      label: 'Old Resin Part A (g)',
      helper: 'Default 10 g',
      value: oldInputs.partA,
    },
    {
      id: 'old-part-b',
      field: 'partB' as const,
      label: 'Old Resin Part B (g)',
      helper: 'Default 10 g',
      value: oldInputs.partB,
    },
    {
      id: 'old-microballoons',
      field: 'microballoons' as const,
      label: 'Old Microballoons (g)',
      helper: 'Default 6.8 g',
      value: oldInputs.microballoons,
    },
  ];

  return (
    <main className='min-h-screen bg-slate-50'>
      <div className='mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-16 text-slate-900 lg:px-12 xl:px-16'>
        <header className='flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl'>
              {PAGE_TITLE}
            </h1>
            <p className='max-w-2xl text-lg leading-relaxed text-slate-600'>
              {META_DESCRIPTION} Enter your legacy Part A, Part B, and
              microballoon weights to instantly see a fully adjusted recipe
              aligned with the new density requirements.
            </p>
          </div>
        </header>

        <section className='grid gap-10 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-12'>
          <form
            aria-label='Old microballoon mix inputs'
            className='flex flex-col gap-8'>
            <fieldset className='flex flex-col gap-6'>
              <legend className='text-xl font-medium text-slate-900'>
                Old Formula Inputs
              </legend>
              {inputConfigs.map(({ id, field, label, helper, value }) => (
                <label key={id} htmlFor={id} className='flex flex-col gap-2'>
                  <span className='text-sm font-semibold uppercase tracking-wide text-slate-500'>
                    {label}
                  </span>
                  <input
                    id={id}
                    type='number'
                    inputMode='decimal'
                    step='0.01'
                    min='0'
                    value={Number.isFinite(value) ? value : 0}
                    onChange={handleInputChange(field)}
                    className='w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-900 shadow-sm outline-none transition focus-visible:border-indigo-400 focus-visible:ring focus-visible:ring-indigo-200'
                    aria-describedby={`${id}-helper`}
                    aria-label={label}
                  />
                  <span id={`${id}-helper`} className='text-xs text-slate-500'>
                    {helper}
                  </span>
                </label>
              ))}
            </fieldset>

            <dl className='grid gap-4 rounded-2xl bg-slate-50 p-6 text-sm text-slate-700'>
              <div className='flex items-center justify-between'>
                <dt className='font-semibold'>Total Old Mix</dt>
                <dd>{formatNumber(metrics.totalOldMass)} g</dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='font-semibold'>Old Microballoons</dt>
                <dd>{formatNumber(metrics.oldMicroVolume)} cm³</dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='font-semibold'>Old Microballoon %</dt>
                <dd>{formatNumber(metrics.oldPercentage)}%</dd>
              </div>
            </dl>
          </form>

          <section
            aria-label='New microballoon mix outputs'
            className='flex flex-col gap-6'
            role='status'
            aria-live='polite'>
            <h2 className='text-xl font-semibold text-slate-900'>
              New Formula Outputs
            </h2>
            <dl className='grid gap-4 rounded-2xl bg-slate-900 p-6 text-slate-50'>
              <div className='flex items-center justify-between'>
                <dt className='font-semibold'>New Part A</dt>
                <dd>{formatNumber(metrics.newPartA)} g</dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='font-semibold'>New Part B</dt>
                <dd>{formatNumber(metrics.newPartB)} g</dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='font-semibold'>New Microballoons</dt>
                <dd>{formatNumber(metrics.newMicroMass)} g</dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='font-semibold'>Total New Mix</dt>
                <dd>{formatNumber(metrics.totalNewMass)} g</dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='font-semibold'>New Microballoon %</dt>
                <dd>{formatNumber(metrics.newPercentage)}%</dd>
              </div>
            </dl>

            <div className='rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600'>
              <p className='font-semibold text-slate-800'>Conversion Notes</p>
              <ul className='mt-3 space-y-2'>
                <li className='leading-relaxed'>
                  Lost microballoon volume of {formatNumber(LOST_VOLUME)} cm³ is
                  replaced with additional resin mass of{' '}
                  {formatNumber(metrics.resinAddition)} g.
                </li>
                <li className='leading-relaxed'>
                  Calculations assume legacy microballoon density of{' '}
                  {OLD_MB_DENSITY} g/cm³ and new density of {NEW_MB_DENSITY}{' '}
                  g/cm³.
                </li>
                <li className='leading-relaxed'>
                  Resin density is set to {RESIN_DENSITY} g/cm³ to evenly
                  distribute added mass between Part A and Part B.
                </li>
              </ul>
            </div>
          </section>
        </section>

        <footer className='rounded-3xl bg-white/70 p-6 text-sm text-slate-600 shadow-inner'>
          This microballoon mix converter keeps your resin proportions balanced
          while updating to the new filler density requirements, helping you
          maintain consistent buoyancy and cure quality across every batch.
        </footer>
      </div>
    </main>
  );
}
