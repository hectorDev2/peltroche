import React from "react";

export const Tabs = () => {
  return (
    <div className="w-1/2 mx-auto mt-4  rounded">
      <ul id="tabs" className="inline-flex w-full px-1 pt-2 ">
        <li className="px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t opacity-50">
          <a id="default-tab" href="#first">
            All
          </a>
        </li>
        <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50">
          <a href="#second">Clothes</a>
        </li>
        <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50">
          <a href="#third">Electronics</a>
        </li>
        <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50">
          <a href="#fourth">Others</a>
        </li>
      </ul>

      <div id="tab-contents">
        <div id="first" className="p-4">
          First tab
        </div>
        <div id="second" className="hidden p-4">
          Second tab
        </div>
        <div id="third" className="hidden p-4">
          Third tab
        </div>
        <div id="fourth" className="hidden p-4">
          Fourth tab
        </div>
      </div>
    </div>
  );
};
