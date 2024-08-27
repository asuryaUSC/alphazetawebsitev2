import { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

const MemberGrid = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [designationFilter, setDesignationFilter] = useState('');
  const [pledgeClassFilter, setPledgeClassFilter] = useState('');
  const [majorFilter, setMajorFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 16;

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetch('/members.json');
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
        member.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (member.second_major && member.second_major.toLowerCase().includes(searchTerm.toLowerCase())) ||
        member.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (designationFilter) {
      filtered = filtered.filter(member => member.designation === designationFilter);
    }

    if (pledgeClassFilter) {
      filtered = filtered.filter(member => member.pledgeClass === pledgeClassFilter);
    }

    if (majorFilter) {
      filtered = filtered.filter(member =>
        member.major === majorFilter || (member.second_major && member.second_major === majorFilter)
      );
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
  const uniqueMajors = [...new Set(members.flatMap(member => [member.major, member.second_major].filter(Boolean)))];

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

  const handlePledgeClassClick = (pledgeClass) => {
    setPledgeClassFilter(pledgeClass);
  };

  // Framer Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
  };

  return (
    <section id="member-grid" className="w-full py-12 md:py-24 lg:py-32 bg-[#EFF7FF]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Filters */}
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
                <option value="AZ Head">AZ Group Head</option>
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
        {/* Member Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
        >
          {currentMembers.length > 0 ? (
            currentMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md relative h-full flex flex-col"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                  style={{ aspectRatio: '4/3' }}
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <motion.h3 className="text-xl font-bold text-[#3D2930] mb-2" variants={textVariants}>{member.name}</motion.h3>
                    <motion.p className="text-sm text-[#3D2930] mb-2 font-semibold" variants={textVariants}>{member.role}</motion.p>
                    <motion.p className="text-sm text-[#3D2930] mb-2 font-medium" variants={textVariants}>Major: {member.major}</motion.p>
                    <motion.p className="text-sm text-[#3D2930] mb-4" variants={textVariants}>{member.description}</motion.p>
                  </div>
                  <div className="flex justify-between items-center">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#89CFF0] hover:text-[#3D2930]">
                      <FaLinkedin className="w-5 h-5" />
                      <span className="ml-2">View Profile</span>
                    </a>
                    <motion.p
                      className="text-sm font-bold text-[#3D2930] cursor-pointer"
                      onClick={() => handlePledgeClassClick(member.pledgeClass)}
                      variants={textVariants}
                    >
                      {member.pledgeClass}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-[#3D2930]">No members found.</p>
          )}
        </motion.div>
        {/* Pagination */}
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
              className={`px-3 py-1 rounded-md ${number === currentPage ? 'bg-[#89CFF0] text-[#3D2930]' : 'bg-[#73C2FB] text-[#3D2930]'}`}
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
