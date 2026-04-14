export type Product = {
  title: string;
  handle: string;
  price: string;
  image: string;
  summary: string;
  bullets: string[];
  imageFit?: 'cover' | 'contain';
};

export const PRODUCTS: Product[] = [
  {
    title: '1 Quart (225g) - *NEW* Silane coated Microballoons',
    handle: '1-quart-premium-glass-microballoons-silane-coated',
    price: '17.99',
    image:
      'https://cdn.shopify.com/s/files/1/0757/8412/6765/files/20260326_133037.jpg?v=1774557302',
    summary:
      'Compact size for testing recipes and small production batches with premium silane-coated microspheres.',
    bullets: [
      'Ideal for trial batches and small-scale builds',
      'Silane-coated glass microspheres for stronger bonding',
      'Great for bait making, model building, and lightweight filler mixes',
    ],
  },
  {
    title: '5 Quart (2.2lb - 1000g) - *NEW* Silane coated Microballoons',
    handle: '5-quart-premium-glass-microballoons-silane-coated',
    price: '65.99',
    image:
      'https://cdn.shopify.com/s/files/1/0757/8412/6765/files/20260326_133112.jpg?v=1774557553',
    summary:
      'Balanced option for regular builders who need more volume without stepping up to bulk containers.',
    bullets: [
      'Strong all-around size for steady project throughput',
      'Improves sanding behavior and detail finish',
      'Reliable for repeat batches and shop workflows',
    ],
  },
  {
    title: '5 Gallon (9lb) - *NEW* Silane coated Microballoons',
    handle: '5-gallon-premium-glass-microballoons-silane-coated',
    price: '210.00',
    image:
      'https://cdn.shopify.com/s/files/1/0757/8412/6765/files/20260326_133131.jpg?v=1774557463',
    summary:
      'High-capacity bulk format built for larger runs and frequent production with consistent results.',
    bullets: [
      'Cost-effective volume for larger output',
      'Maintains smooth blend quality across big batches',
      'Water-resistant composition well suited for bait applications',
    ],
  },
  {
    title: '18KG - *NEW* Silane coated Microballoons',
    handle: '18-kg-box-premium-glass-microballoons-silane-coated',
    price: '800.00',
    image:
      'https://cdn.shopify.com/s/files/1/0757/8412/6765/files/20260326_065525.jpg?v=1774556583',
    summary:
      'Maximum-volume professional format for large production environments and long-run material planning.',
    bullets: [
      'Designed for high-throughput production use',
      'Reduces reorder frequency for heavy users',
      'Same premium silane-coated performance at scale',
    ],
  },
  {
    title: 'SacPig Microballoon sticker',
    handle: 'microballoon-sticker',
    price: '4.00',
    image:
      'https://cdn.shopify.com/s/files/1/0757/8412/6765/files/eh-need-some-balloons-balloon-only-logo-border.png?v=1712111316',
    summary:
      'Original SacPig Microballoon sticker artwork to rep the brand in your workspace or tackle setup.',
    bullets: [
      'SacPig Microballoon themed design',
      'Great add-on for orders and gear cases',
      'Simple collectible for fans of the brand',
    ],
    imageFit: 'contain',
  },
];

export const getProductByHandle = (handle: string) =>
  PRODUCTS.find((product) => product.handle === handle);
