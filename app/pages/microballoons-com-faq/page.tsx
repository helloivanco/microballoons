import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about premium silane-coated glass microballoons — uses, mixing tips, switching from Alumilite or System 3, and more.',
  alternates: { canonical: '/pages/microballoons-com-faq' },
  openGraph: {
    title: 'FAQ — Premium Silane-Coated Microballoons',
    description:
      'Answers about using premium silane-coated microballoons for resin baits, model building, and lightweight projects.',
    url: '/pages/microballoons-com-faq',
  },
};

const FAQ_ITEMS = [
  {
    question: 'What are Premium Glass Microballoons - Silane-Coated used for?',
    answer:
      'Our Premium Silane-Coated Microballoons are versatile and ideal for crafting resin baits, building hobby models, and anything that floats. They offer exceptional bonding strength and ease the process of creation.',
  },
  {
    question:
      'Can I switch to these Microballoons from another system like Alumilite or System 3?',
    answer:
      'Absolutely. To adapt your current recipe, simply double the weight of the microballoons you normally use, then add an additional 1 to 4 grams. This should bring you close to the desired outcome, but fine-tuning is still recommended for best results.',
  },
  {
    question: 'Why should I choose Microballoons.com Microballoons?',
    answer:
      'They offer improved structural integrity, hardness, and strength. Easier sanding, better screw bite, smooth integration, reduced surface imperfections, a protective silane coating against moisture, and a less fluffy water-resistant composition ideal for bait making.',
  },
  {
    question:
      'What is the significance of the Silane Coating on these Microballoons?',
    answer:
      'Silane coating enhances the bond between resin and glass microspheres. It overcomes the challenges of differing structures and intermolecular attractions, resulting in a stronger and more durable bond.',
  },
  {
    question: 'How do Silane Coupling Agents work?',
    answer:
      'Silane coupling agents act at the interface between glass microspheres and other particles such as resin, sand, and metals. They contain reactive groups that form a strong chemical bond with the glass surface, ensuring enhanced adhesion and durability.',
  },
  {
    question: 'How is Microballoons.com related to SacPig Bait Co.?',
    answer:
      'Michael Mcamis, the founder of both Microballoons.com and SacPig Bait Co., discovered and developed these microballoons initially to enhance bait making. Research later revealed their potential for many applications.',
  },
];

function FaqJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function FaqPage() {
  return (
    <main className='min-h-screen bg-slate-50'>
      <FaqJsonLd />
      <section className='mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16 lg:px-12'>
        <header className='space-y-4'>
          <h1 className='text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
            Frequently Asked Questions about Premium Glass Microballoons -
            Silane-Coated Microspheres
          </h1>
          <p className='max-w-3xl text-lg leading-relaxed text-slate-600'>
            Common answers about using Microballoons.com Premium
            Silane-Coated Microballoons for resin baits, model building, and
            other lightweight projects.
          </p>
        </header>

        <div className='rounded-2xl border border-amber-300 bg-amber-50 p-6 text-amber-950 shadow-sm'>
          <p className='leading-relaxed'>
            <em>
              <strong>Switching from our previous formula?</strong> Visit{' '}
              <Link
                href='/calculator'
                className='font-semibold underline decoration-amber-700 underline-offset-2 transition hover:text-amber-800'>
                the calculator
              </Link>{' '}
              to recalculate volume and buoyancy. The ratios are different
              from the previous balloon, and this app should take you very
              close to your old formula.
            </em>
          </p>
        </div>

        <div className='grid gap-6'>
          <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-xl font-semibold text-slate-950'>
              What are Premium Glass Microballoons - Silane-Coated used for?
            </h2>
            <p className='mt-3 leading-relaxed text-slate-700'>
              Our{' '}
              <a
                title='Premium Microballoons'
                href='https://microballoons.com/collections/all'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-slate-900 underline decoration-slate-300 underline-offset-2 transition hover:decoration-slate-500'>
                Premium Silane-Coated Microballoons
              </a>{' '}
              are versatile and ideal for crafting resin baits, building hobby
              models, and anything that floats. They offer exceptional bonding
              strength and ease the process of creation.
            </p>
          </article>

          <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-xl font-semibold text-slate-950'>
              Can I switch to these Microballoons from another system like
              Alumilite or System 3?
            </h2>
            <p className='mt-3 leading-relaxed text-slate-700'>
              Absolutely. To adapt your current recipe, simply double the
              weight of the microballoons you normally use, then add an
              additional 1 to 4 grams. This should bring you close to the
              desired outcome, but fine-tuning is still recommended for best
              results.
            </p>
          </article>

          <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-xl font-semibold text-slate-950'>
              Why should I choose Microballoons.com Microballoons?
            </h2>
            <p className='mt-3 leading-relaxed text-slate-700'>
              Microballoons.com&rsquo;s Microballoons offer many advantages:
            </p>
            <ul className='mt-4 list-disc space-y-2 pl-5 text-slate-700'>
              <li>Improved structural integrity, hardness, and strength.</li>
              <li>Easier sanding and better screw bite.</li>
              <li>
                Smooth integration into projects due to ease of mixing.
              </li>
              <li>
                Reduced surface imperfections and lower sanding requirements.
              </li>
              <li>Protective silane coating against moisture.</li>
              <li>
                Less fluffy, water-resistant composition ideal for bait making.
              </li>
            </ul>
          </article>

          <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-xl font-semibold text-slate-950'>
              What is the significance of the Silane Coating on these
              Microballoons?
            </h2>
            <p className='mt-3 leading-relaxed text-slate-700'>
              Silane coating enhances the bond between resin and glass
              microspheres. It overcomes the challenges of differing structures
              and intermolecular attractions, resulting in a stronger and more
              durable bond.
            </p>
          </article>

          <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-xl font-semibold text-slate-950'>
              How do Silane Coupling Agents work?
            </h2>
            <p className='mt-3 leading-relaxed text-slate-700'>
              Silane coupling agents act at the interface between glass
              microspheres and other particles (such as resin, sand, and
              metals). They contain reactive groups that form a strong chemical
              bond with the glass surface, ensuring enhanced adhesion and
              durability.
            </p>
          </article>

          <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-xl font-semibold text-slate-950'>
              How is Microballoons.com related to SacPig Bait Co.?
            </h2>
            <p className='mt-3 leading-relaxed text-slate-700'>
              Michael Mcamis, the founder of both Microballoons.com and{' '}
              <a
                title='SacPig Bait Co.'
                href='https://sacpig.com'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-slate-900 underline decoration-slate-300 underline-offset-2 transition hover:decoration-slate-500'>
                SacPig Bait Co.
              </a>
              , discovered and developed these microballoons initially to
              enhance bait making. Research later revealed their potential for
              many applications, leading to the launch of Premium Glass
              Microballoons - Silane-Coated for broader use.
            </p>
          </article>
        </div>

        <div className='grid gap-6 lg:grid-cols-2'>
          <section className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-xl font-semibold text-slate-950'>
              Under a Microscope - Microballoons.com vs Others
            </h2>
            <p className='mt-3 text-slate-700'>
              Smoother, rounder and more consistent.
            </p>
            <div className='mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 p-2'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='https://cdn.shopify.com/s/files/1/0844/8976/5146/files/mb2_600x600.png?v=1707693826'
                alt='Microballoons.com vs Other Brands'
                width={600}
                height={600}
                loading='lazy'
                decoding='async'
                className='h-auto w-full rounded-lg object-cover'
              />
            </div>
          </section>

          <section className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-xl font-semibold text-slate-950'>
              Watch the Strength Test Video
            </h2>
            <p className='mt-3 text-slate-700'>
              Microballoons.com (formerly Sacpig) microspheres were tested
              against Alumilite.
            </p>
            <div className='mt-4 aspect-video overflow-hidden rounded-xl border border-slate-200'>
              <iframe
                title='Microballoons strength test video'
                src='https://www.youtube.com/embed/l5srFkGoVXo?si=Vb2j3q67LLrlfluP'
                className='h-full w-full'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
            </div>
          </section>
        </div>

        <p>
          <a
            href='https://microballoons.com/pages/about-microballoons-com'
            title='About Microballoons.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-base font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-500'>
            About Microballoons.com
          </a>
        </p>
      </section>
    </main>
  );
}
