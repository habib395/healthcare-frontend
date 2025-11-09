import { useGetFaqsInfoQuery } from "../provider/home/faqApiSlice";

const Faq = () => {
  const { data, isLoading, isError } = useGetFaqsInfoQuery();

  if (isLoading) {
    return (
      <div className="w-5/6 mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold">Loading FAQs...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-5/6 mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold text-red-600">
          Error loading FAQs. Please try again later.
        </h2>
      </div>
    );
  }

  const faqSection = data?.data?.[0];

  if (!faqSection) {
    return (
      <div className="w-5/6 mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold">No FAQ content available.</h2>
      </div>
    );
  }

  const { section_title, section_subtitle, faqs } = faqSection;

  return (
    <div className="w-5/6 mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold">{section_title || "Have Any Questions?"}</h2>
        <h5 className="text-2xl text-gray-500 py-8">
          {section_subtitle || 
            <>
              Find below our frequently asked questions. If you have other questions
              please <br />
              contact us.
            </>
          }
        </h5>
      </div>
      <div>
        {faqs?.map((faq, index) => (
          <div
            className="collapse collapse-plus bg-base-200 my-4 border-2"
            key={faq._id || index} 
          >
      
            <input
              type="radio"
              name="my-accordion-3" 
              defaultChecked={index === 0}
            />
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;