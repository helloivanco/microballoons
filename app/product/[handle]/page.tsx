import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import HomeHeroMedia from '../../components/HomeHeroMedia';
import ProductCard from '../../components/ProductCard';
import ShareProductButton from '../../components/ShareProductButton';
import { PRODUCTS, getProductByHandle } from '../../data/products';

const MICROBALLOON_HANDLES = new Set([
  '1-quart-premium-glass-microballoons-silane-coated',
  '5-quart-premium-glass-microballoons-silane-coated',
  '5-gallon-premium-glass-microballoons-silane-coated',
  '18-kg-box-premium-glass-microballoons-silane-coated',
]);

type ProductPageProps = {
  params: Promise<{
    handle: string;
  }>;
};

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    handle: product.handle,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = getProductByHandle(handle);

  if (!product) {
    return {
      title: 'Product',
      description: 'Microballoons.com product details.',
    };
  }

  return {
    title: product.title,
    description: product.summary,
    alternates: { canonical: `/products/${handle}` },
    openGraph: {
      title: `${product.title} | Microballoons.com`,
      description: product.summary,
      url: `/products/${handle}`,
      images: [{ url: product.image, alt: product.title }],
    },
  };
}

function ProductJsonLd({ product }: { product: { title: string; price: string; summary: string; image: string; handle: string } }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.summary,
    image: product.image,
    url: `https://microballoons.com/products/${product.handle}`,
    brand: { '@type': 'Brand', name: 'Microballoons.com' },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://sacpig.com/products/${product.handle}`,
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const otherProducts = PRODUCTS.filter(
    (item) => item.handle !== product.handle,
  );
  const isMicroballoonProduct = MICROBALLOON_HANDLES.has(product.handle);
  const imageFit = product.imageFit ?? 'cover';
  const isContained = imageFit === 'contain';
  const buyUrl = `https://sacpig.com/products/${product.handle}`;

  return (
    <main className='min-h-screen bg-slate-50'>
      <ProductJsonLd product={product} />
      <section className='mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 lg:px-12'>
        <article className='overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm'>
          <div className='grid gap-0 lg:grid-cols-[1fr_1.1fr]'>
            <div
              className={`relative aspect-square ${isContained ? 'bg-white' : 'bg-slate-100'}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.title}
                decoding='async'
                className={`absolute inset-0 h-full w-full ${isContained ? 'object-contain p-8' : 'object-cover'}`}
              />
            </div>

            <div className='flex flex-col gap-6 p-6 sm:p-8'>
              <h1 className='text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl'>
                {product.title}
              </h1>
              <p className='text-3xl font-bold text-slate-900'>
                ${product.price}
              </p>
              <p className='text-base leading-relaxed text-slate-700'>
                {product.summary}
              </p>

              <ul className='list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700'>
                {product.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className='flex flex-wrap items-center gap-3'>
                <a
                  href={buyUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'>
                  Buy Now on SacPig.com
                  <ExternalLink size={16} aria-hidden='true' />
                </a>
                <ShareProductButton title={product.title} />
              </div>
              <p className='text-sm text-slate-500'>
                Microballoons.com products are available for purchase directly on{' '}
                <a
                  href='https://sacpig.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-medium text-slate-700 underline underline-offset-2'>
                  SacPig.com
                </a>
                .
              </p>
            </div>
          </div>
        </article>

        {isMicroballoonProduct ? (
          <article className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8'>
            <h2 className='text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl'>
              Formula and Product Information
            </h2>

            <div className='mt-5 space-y-5 text-sm leading-relaxed text-slate-700 sm:text-base'>
              <p>
                Introducing our premium Microballoons coated with silane,
                specifically designed for a wide range of applications from
                crafting resin baits to building hobby models. These glass
                microspheres guarantee exceptional bonding strength and simplify
                the sanding process. The silane coating functions as an
                intermediary, fostering stronger adhesion between the resin and
                the microspheres, resulting in a structurally superior end
                product.
              </p>

              <div className='space-y-2'>
                <h3 className='text-base font-semibold text-slate-900 sm:text-lg'>
                  A note to customers who purchased before March 2026
                </h3>
                <p>
                  Welcome back! These are a new formula, you must visit the{' '}
                  <Link
                    href='/calculator'
                    className='font-semibold text-slate-900 underline underline-offset-4'>
                    Calculator
                  </Link>{' '}
                  page . To recalculate volume and buoyancy. The ratios are
                  different from the previous balloons. This app should take you
                  very close to your old formula.
                </p>
              </div>

              <div className='space-y-2'>
                <h3 className='text-base font-semibold text-slate-900 sm:text-lg'>
                  Are you transferring from another Microballoon system?
                </h3>
                <p>
                  Just use the same volume as your existing Alumilite, System 3,
                  or similar product. If you prefer to measure by weight, simply
                  use twice the weight.
                </p>
              </div>

              <div className='space-y-2'>
                <h3 className='text-base font-semibold text-slate-900 sm:text-lg'>
                  Why SacPig Microballoons?
                </h3>
                <p>
                  In side-by-side strength testing, our silane-coated formula
                  has shown up to 2x stronger performance than the competition.
                </p>
                <ol className='list-decimal space-y-2 pl-5'>
                  <li>
                    Achieve an optimal balance of structural integrity,
                    hardness, and strength in your creations, while enjoying an
                    easier sanding process with improved screw bite.
                  </li>
                  <li>
                    Benefit from our product&apos;s ease of mixing, ensuring a
                    smooth integration into your projects.
                  </li>
                  <li>
                    Our microballoons pour thinner, bringing out the finest
                    details in your work.
                  </li>
                  <li>
                    Minimize surface imperfections and decrease the need for
                    filling and sanding due to a reduction in surface craters.
                  </li>
                  <li>
                    The silane coating provides a protective shield against
                    moisture contamination, enabling longer exposure times.
                  </li>
                  <li>
                    With a less fluffy composition, our water-resistant
                    microballoons are perfect for bait making, reducing
                    desiccation effects.
                  </li>
                </ol>
              </div>

              <div className='space-y-2'>
                <h3 className='text-base font-semibold text-slate-900 sm:text-lg'>
                  Deep Dive into Silane Coating
                </h3>
                <p>
                  Traditional resin struggles to form a robust chemical bond
                  with glass microspheres due to their differing structures and
                  properties. Furthermore, they can&apos;t readily penetrate or
                  dissolve each other due to intermolecular attraction at the
                  interface. This is where silane coupling agents excel,
                  enhancing the bond between the resin and glass microspheres
                  and leading to improved adhesion.
                </p>
                <p>
                  Silane coupling agents work at the interface between the glass
                  microspheres and the resin, binding these disparate materials
                  together. Our silane coupling agents contain three inorganic
                  reactive groups on silicon (such as methoxy, ethoxy, or
                  acetoxy), ensuring a firm bond with the glass surface. The
                  silicon&apos;s alkoxy groups hydrolyze to silanols, either due
                  to the addition of water or residual moisture on the glass
                  surface. These silanols then interact with metal hydroxyl
                  groups on the glass surface, forming a secure and enduring
                  chemical bond.
                </p>
              </div>
            </div>
          </article>
        ) : null}

        <section className='flex flex-col gap-4'>
          <h2 className='text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl'>
            Comparison and Strength Test
          </h2>
          <p className='max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base'>
            Watch the Microballoons.com comparison and strength test video.
          </p>
          <HomeHeroMedia />
        </section>
      </section>

      <section className='mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-20 lg:px-12'>
        <h2 className='text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl'>
          Other Products
        </h2>
        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {otherProducts.map((item) => (
            <ProductCard key={item.handle} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
