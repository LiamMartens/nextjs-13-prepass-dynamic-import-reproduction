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
  // @README if you comment the prepass out, the dynamic import will work againgit
  await ssrPrepass(<Home />);
  return { props: {} }
}