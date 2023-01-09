import dynamic from 'next/dynamic';
import ssrPrepass from 'react-ssr-prepass'

const DynamicComponent = dynamic(() => import('../components/Component'));

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <DynamicComponent />
  )
}

export const getStaticProps = async () => {
  await ssrPrepass(<Home />);
  return { props: {} }
}