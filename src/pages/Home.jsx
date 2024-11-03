import React, { useEffect, useState } from 'react';
import '../App.css';
// Img
import Back from '../assets/Back.svg';
import Forward from '../assets/Forward.svg';
import http from '../axios';
import { Link } from 'react-router-dom';

function Home() {
  const [featured, setFeatured] = useState([]);
  const [mixes, setMixes] = useState([]);
  const [made, setMade] = useState([]);
  const [recent, setRecent] = useState([]);
  const [jump, setJump] = useState([]);
  const [uniq, setUniq] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const [seeAllMade, setSeeAllMade] = useState(false);
  const [seeAllRecent, setSeeAllRecent] = useState(false);
  const [seeAllJump, setSeeAllJump] = useState(false);
  const [seeAllUniq, setSeeAllUniq] = useState(false);
  useEffect(() => {
    http
      .get('featured-playlists')
      .then((data) => {
        // console.log(data.data.playlists.items);
        setFeatured(data.data.playlists.items);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    http
      .get('categories/toplists/playlists')
      .then((data) => {
        // console.log(data.data.playlists);
        setMixes(data.data.playlists.items);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    http
      .get('categories/0JQ5DAqbMKFHOzuVTgTizF/playlists')
      .then((data) => {
        // console.log(data.data.playlists.items);
        setMade(data.data.playlists.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    http
      .get('categories/0JQ5DAqbMKFQ00XGBls6ym/playlists')
      .then((data) => {
        // console.log(data.data.playlists.items);
        setRecent(data.data.playlists.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    http
      .get('categories/0JQ5DAqbMKFLVaM30PMBm4/playlists')
      .then((data) => {
        // console.log(data.data.playlists.items);
        setJump(data.data.playlists.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    http
      .get('categories/0JQ5DAqbMKFCbimwdOYlsl/playlists')
      .then((data) => {
        // console.log(data.data.playlists.items);
        setUniq(data.data.playlists.items);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSeeAll() {
    setSeeAll(!seeAll);
  }
  function handleSeeAllMade() {
    setSeeAllMade(!seeAllMade);
  }
  function handleSeeAllRecent() {
    setSeeAllRecent(!seeAllRecent);
  }
  function handleSeeAllJump() {
    setSeeAllJump(!seeAllJump);
  }

  function handleSeeAllUniq() {
    setSeeAllUniq(!seeAllUniq);
  }
  return (
    <div className='w-full '>
      <div className='contain'>
        <div className='next flex gap-5 pt-3 '>
          <img src={Back} alt='rasm' />
          <img src={Forward} alt='rasm' />
        </div>
        <div className='text-white  pt-6'>
          <h2 className='text-[39px] font-bold'>Good afternoon</h2>
          <div className='wrapper grid gap-16  grid-cols-2 gap-y-6 pt-4'>
            {featured.length > 0 &&
              featured.slice(1, 7).map((value, index) => {
                return (
                  <Link
                    to='/'
                    className='w-[440px] flex  gap-6 items-center bg-[#b3b3b32e] rounded-md'
                    key={index}
                  >
                    {value.images.map((value) => {
                      return <img src={value.url} alt='' width={66} />;
                    })}
                    <p>{value.name}</p>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
      <div className='bg-[#121212]'>
        <div className=' contain malum pt-8   flex flex-col '>
          <div className='flex justify-between'>
            <h3 className='text-3xl text-white font-bold pb-6'>
              Your top mixes
            </h3>
            <button className='text-[#ADADAD] font-bold' onClick={handleSeeAll}>
              SEE ALL
            </button>
          </div>

          <div className='mixes grid grid-cols-4 gap-8'>
            {seeAll
              ? mixes.map((value) => {
                  return (
                    <Link
                      to='/'
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2'>{value.description}</p>
                    </Link>
                  );
                })
              : mixes.slice(0, 4).map((value) => {
                  return (
                    <Link
                      to='/'
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2'>{value.description}</p>
                    </Link>
                  );
                })}
          </div>

          <div className='flex pt-8 justify-between'>
            <h3 className='text-3xl text-white font-bold pb-6'>Made for you</h3>
            <button
              className='text-[#ADADAD] font-bold'
              onClick={handleSeeAllMade}
            >
              SEE ALL
            </button>
          </div>
          <div className='made grid grid-cols-4 gap-8'>
            {seeAllMade
              ? made.map((value) => {
                  return (
                    <Link
                      to='/'
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>
                    </Link>
                  );
                })
              : made.slice(0, 4).map((value) => {
                  return (
                    <Link
                      to='/'
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>{' '}
                    </Link>
                  );
                })}
          </div>

          <div className='flex  pt-8 justify-between'>
            <h3 className='text-3xl text-white font-bold pb-6'>
              Recently played
            </h3>
            <button
              className='text-[#ADADAD] font-bold'
              onClick={handleSeeAllRecent}
            >
              SEE ALL
            </button>
          </div>

          <div className='recent grid grid-cols-4 gap-8'>
            {seeAllRecent
              ? recent.map((value) => {
                  return (
                    <Link
                      to='/'
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>
                    </Link>
                  );
                })
              : recent.slice(0, 4).map((value) => {
                  return (
                    <Link
                      to='/'
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>{' '}
                    </Link>
                  );
                })}
          </div>

          {/* JUMP */}

          <div className='flex pt-8 justify-between'>
            <h3 className='text-3xl text-white font-bold pb-6'>Jump back in</h3>
            <button
              className='text-[#ADADAD] font-bold'
              onClick={handleSeeAllJump}
            >
              SEE ALL
            </button>
          </div>

          <div className='jump grid grid-cols-4 gap-8'>
            {seeAllJump
              ? jump.map((value) => {
                  return (
                    <Link
                      to='/'
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>
                    </Link>
                  );
                })
              : jump.slice(0, 4).map((value) => {
                  return (
                    <Link
                      to='/'
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>{' '}
                    </Link>
                  );
                })}
          </div>

          {/* UNIQ */}

          <div className='flex pt-8 justify-between'>
            <h3 className='text-3xl text-white font-bold pb-6'>
              Uniquely yours
            </h3>
            <button
              className='text-[#ADADAD] font-bold'
              onClick={handleSeeAllUniq}
            >
              SEE ALL
            </button>
          </div>

          <div className='uniq pb-32 grid grid-cols-4 gap-8'>
            {seeAllUniq
              ? uniq.map((value) => {
                  return (
                    <Link
                      to='/'
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>
                    </Link>
                  );
                })
              : uniq.slice(0, 4).map((value) => {
                  return (
                    <Link
                      to='/'
                      className='card p-5 rounded-md shadow-2xl w-[225px]  bg-[#252323] hover:bg-[#292929]'
                    >
                      {value.images.map((value) => {
                        return (
                          <img
                            src={value.url}
                            alt='rasm'
                            width={182}
                            className='pb-6 rounded-md'
                          />
                        );
                      })}
                      <h3 className='text-white text-xl font-bold'>
                        {value.name}
                      </h3>
                      <p className='text-[#B3B3B3] pt-2 w-[185px]'>
                        {value.description.includes('<a')
                          ? value.description.slice(41, 80)
                          : value.description}
                      </p>{' '}
                    </Link>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
