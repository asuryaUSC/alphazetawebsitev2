import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const MemberGrid = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [designationFilter, setDesignationFilter] = useState('');
  const [pledgeClassFilter, setPledgeClassFilter] = useState('');
  const [majorFilter, setMajorFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 16;

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetch('/members.json'); // Ensure path is to public directory
      const data = await response.json();
      setMembers(data);
      setFilteredMembers(data);
    };
    fetchMembers();
  }, []);

  useEffect(() => {
    let filtered = members;

    if (searchTerm) {
      filtered = filtered.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.major.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (designationFilter) {
      filtered = filtered.filter(member => member.designation === designationFilter);
    }

    if (pledgeClassFilter) {
      filtered = filtered.filter(member => member.pledgeClass === pledgeClassFilter);
    }

    if (majorFilter) {
      filtered = filtered.filter(member => member.major === majorFilter);
    }

    if (!designationFilter && !pledgeClassFilter && !majorFilter && !searchTerm) {
      filtered = filtered.sort((a, b) => {
        if (a.designation === 'Executive Board' && b.designation !== 'Executive Board') return -1;
        if (a.designation !== 'Executive Board' && b.designation === 'Executive Board') return 1;
        return 0;
      });
    }

    setFilteredMembers(filtered);
    setCurrentPage(1);
  }, [searchTerm, designationFilter, pledgeClassFilter, majorFilter, members]);

  const uniquePledgeClasses = [...new Set(members.map(member => member.pledgeClass))];
  const uniqueMajors = [...new Set(members.map(member => member.major))];

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
  };

  return (
    <section id="member-grid" className="w-full py-12 md:py-24 lg:py-32 bg-[#EFF7FF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <label htmlFor="designation" className="text-sm text-[#3D2930]">Filter by Designation:</label>
              <select
                id="designation"
                className="max-w-[200px] p-2 border rounded text-[#3D2930]"
                onChange={(e) => setDesignationFilter(e.target.value)}
                value={designationFilter}
              >
                <option value="">All</option>
                <option value="Executive Board">Executive Board</option>
                <option value="AZ Group Head">AZ Group Head</option>
                <option value="Active Member">Active Member</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="pledgeClass" className="text-sm text-[#3D2930]">Filter by Pledge Class:</label>
              <select
                id="pledgeClass"
                className="max-w-[200px] p-2 border rounded text-[#3D2930]"
                onChange={(e) => setPledgeClassFilter(e.target.value)}
                value={pledgeClassFilter}
              >
                <option value="">All</option>
                {uniquePledgeClasses.map((pledgeClass, index) => (
                  <option key={index} value={pledgeClass}>{pledgeClass}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="major" className="text-sm text-[#3D2930]">Filter by Major:</label>
              <select
                id="major"
                className="max-w-[200px] p-2 border rounded text-[#3D2930]"
                onChange={(e) => setMajorFilter(e.target.value)}
                value={majorFilter}
              >
                <option value="">All</option>
                {uniqueMajors.map((major, index) => (
                  <option key={index} value={major}>{major}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <label htmlFor="search" className="text-sm text-[#3D2930]">Search:</label>
            <input
              id="search"
              type="text"
              placeholder="Search members..."
              className="max-w-[200px] p-2 border rounded text-[#3D2930]"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentMembers.length > 0 ? (
            currentMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-60 object-cover object-center" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#3D2930] mb-2">{member.name}</h3>
                  <p className="text-sm text-[#3D2930] mb-2">{member.role}</p>
                  <p className="text-sm text-[#3D2930] mb-4">{member.description}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#EEC3E8] hover:text-[#3D2930]">
                    <FaLinkedin className="w-5 h-5" />
                    <span>View Profile</span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-[#3D2930]">No members found.</p>
          )}
        </div>
        <div className="flex justify-center mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredMembers.length / membersPerPage)}
            paginate={paginate}
          />
        </div>
      </div>
    </section>
  );
};

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex space-x-2">
        {pageNumbers.map(number => (
          <li key={number} className="cursor-pointer">
            <a
              onClick={() => paginate(number)}
              className={`px-3 py-1 rounded-md ${number === currentPage ? 'bg-[#EEC3E8] text-[#3D2930]' : 'bg-[#3D2930] text-white'}`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MemberGrid;
