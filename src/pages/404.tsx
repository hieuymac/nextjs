import React from 'react';
import { client } from 'client';
import { Header, Hero, Footer } from '../components';

export default function Page(): JSX.Element {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header
        title={generalSettings?.title}
        description={generalSettings?.description}
      />
      <main className="content content-page">
        <Hero title={`Oops! That page can’t be found.`} />
        <div className="wrap" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWi532p_16R8peZqxMsbCFmVYznxvvfWd_3w&usqp=CAU');">
          <div>
            <div>
              <p>
                The page you were looking for does not exist or is no longer
                available or emotionally ok.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer copyrightHolder={generalSettings?.title} />
    </>
  );
}
