import React from 'react';
import Link from 'next/link';

const MissionAndValues = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E5F2FF]">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-[#89CFF0] px-3 py-1 text-sm text-[#3D2930]">Mission & Values</div>
          <h2 className="text-3xl font-bold tracking-tighter text-[#3D2930] sm:text-4xl md:text-5xl">Mission and Values</h2>
          <p className="mx-auto max-w-[700px] text-[#3D2930] md:text-xl lg:text-base xl:text-xl">
            Alpha Zeta is dedicated to fostering professional growth, leadership, and community among its members.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Card title="Brotherhood" description="Fostering lifelong connections and support among members." Icon={UsersIcon} />
          <Card title="Integrity" description="Upholding the highest ethical standards in all endeavors." Icon={CheckIcon} />
          <Card title="Knowledge" description="Cultivating intellectual growth and professional development." Icon={BookIcon} />
          <Card title="Unity" description="Promoting collaboration and a shared sense of purpose." Icon={HandshakeIcon} />
          <Card title="Service" description="Dedicating time and resources to positively impact the community." Icon={HeartIcon} />
        </div>
        <div className="flex justify-center">
          <Link
            href="/members"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#89CFF0] px-8 text-sm font-medium text-[#3D2930] shadow transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#89CFF0]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D2930] disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Active Members
          </Link>
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, description, Icon }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-[#E5F2FF] rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
      <div className="bg-[#89CFF0] rounded-md p-3 flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#3D2930]" />
      </div>
      <h3 className="text-xl font-semibold text-[#3D2930]">{title}</h3>
      <p className="text-[#3D2930] text-center">{description}</p>
    </div>
  );
};

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function HandshakeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default MissionAndValues;
