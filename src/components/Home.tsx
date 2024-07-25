import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const Home = () => {
  const [sections, setSections] = useState([
    { id: 1, content: "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester. And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop.", imgSrc: "https://via.placeholder.com/100" },
    { id: 2, content: "New content for section 2", imgSrc: "https://via.placeholder.com/100" },
    { id: 3, content: "New content for section 3", imgSrc: "https://via.placeholder.com/100" }
  ]);

  return (
    <div className="flex justify-between items-start w-full">
      <ScrollArea className="border border-black flex flex-col items-center justify-center p-5 m-2 w-1/2 h-72">
        {sections.map((section, index) => (
          <React.Fragment key={section.id}>
            <div className="flex items-start mb-4 w-full">
              <img src={section.imgSrc} alt="section image" className="w-24 h-24 mr-4" />
              <div>{section.content}</div>
            </div>
            {index < sections.length - 1 && <hr className="border-t w-full my-4" />}
          </React.Fragment>
        ))}
      </ScrollArea>

      <div className="border border-black flex items-center justify-center p-5 m-2 w-1/5 h-36">
        <p>Small Box Content</p>
      </div>
      <div className="border border-black flex items-center justify-center p-5 m-2 w-1/5 h-36">
        <p>Medium Box Content</p>
      </div>
    </div>
  );
};

export default Home;
