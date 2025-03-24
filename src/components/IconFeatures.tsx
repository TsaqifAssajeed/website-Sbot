"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faDownload,
  faSearch,
  faUsers,
  faPhone,
  faBullhorn
} from "@fortawesome/free-solid-svg-icons";

export const GameIcon = () => (
  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-dark-background mb-4">
    <FontAwesomeIcon icon={faGamepad} className="h-6 w-6 text-[#6e309b]" />
  </div>
);

export const DownloadIcon = () => (
  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-dark-background mb-4">
    <FontAwesomeIcon icon={faDownload} className="h-6 w-6 text-[#6e309b]" />
  </div>
);

export const SearchIcon = () => (
  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-dark-background mb-4">
    <FontAwesomeIcon icon={faSearch} className="h-6 w-6 text-[#6e309b]" />
  </div>
);

export const GroupIcon = () => (
  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-dark-background mb-4">
    <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-[#6e309b]" />
  </div>
);

export const PhoneIcon = () => (
  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-dark-background mb-4">
    <FontAwesomeIcon icon={faPhone} className="h-6 w-6 text-[#6e309b]" />
  </div>
);

export const ChannelIcon = () => (
  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-dark-background mb-4">
    <FontAwesomeIcon icon={faBullhorn} className="h-6 w-6 text-[#6e309b]" />
  </div>
);
