import React from 'react';

const WhyRushAZ = () => {
  return (
    <section className="bg-[#E5F2FF] py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto text-center mb-8">
        <div className="inline-block rounded-lg bg-[#89CFF0] px-3 py-1 text-sm text-[#3D2930]">Why Rush AZ?</div>
        <h2 className="text-3xl md:text-4xl pt-2 font-bold mb-2 text-[#3D2930]">Why Rush Alpha Zeta?</h2>
        <p className="text-[#3D2930]">Discover the benefits of joining our premier co-ed business society.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-[#89CFF0] rounded-full p-4">
            <BriefcaseIcon className="w-8 h-8 text-[#3D2930]" />
          </div>
          <h3 className="text-xl font-bold text-[#3D2930]">Professional Growth</h3>
          <p className="text-[#3D2930]">
            Gain valuable skills and experience through our professional development workshops and events.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-[#89CFF0] rounded-full p-4">
            <UsersIcon className="w-8 h-8 text-[#3D2930]" />
          </div>
          <h3 className="text-xl font-bold text-[#3D2930]">Networking</h3>
          <p className="text-[#3D2930]">
            Build lasting connections with like-minded students and industry professionals.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-[#89CFF0] rounded-full p-4">
            <BadgeIcon className="w-8 h-8 text-[#3D2930]" />
          </div>
          <h3 className="text-xl font-bold text-[#3D2930]">Mentorship</h3>
          <p className="text-[#3D2930]">
            Receive guidance and support from experienced upperclassmen and alumni.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-[#89CFF0] rounded-full p-4">
            <HandshakeIcon className="w-8 h-8 text-[#3D2930]" />
          </div>
          <h3 className="text-xl font-bold text-[#3D2930]">Career Opportunities</h3>
          <p className="text-[#3D2930]">
            Access exclusive job and internship opportunities through our corporate partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};

// Icon Components

function BadgeIcon(props) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  );
}

function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
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

export default WhyRushAZ;
