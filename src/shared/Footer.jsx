import { 
  FaStethoscope, FaFacebookF, FaLinkedinIn, 
  FaInstagram, FaYoutube 
} from "react-icons/fa"; 
import { useGetFooterInfoQuery } from "../pages/provider/home/footerApiSlice";

const SocialIconMap = {
    FaFacebookF: FaFacebookF,
    FaLinkedinIn: FaLinkedinIn,
    FaInstagram: FaInstagram,
    FaYoutube: FaYoutube,
};


const Footer = () => {
  const { 
    data: footerInfo, 
    isLoading, 
    isError 
  } = useGetFooterInfoQuery();

  if (isLoading) return <div className="text-center font-bold py-64">Loading Footer...</div>;
  if (isError) return <div>Error loading footer data.</div>;
  
  const footerData = footerInfo?.data?.[0];
  if (!footerData) return null; 

  return (
    <div>
      <div className="bg-blue-600 text-white py-16">
        <footer className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-16 p-6 md:p-10 w-11/12 lg:w-5/6 mx-auto">

          <div className="col-span-2 md:col-span-2 flex flex-col space-y-5">
            <div className="flex items-center space-x-3">
              <FaStethoscope className="text-4xl text-white" />
              <div className="flex flex-col">
                <p className="text-4xl font-extrabold tracking-wider">
                  Doc Time
                </p>
                <p className="text-sm font-light -mt-1">
                  Healthcare Anytime Anywhere
                </p>
              </div>
            </div>

            <p className="text-gray-200 text-sm max-w-sm leading-relaxed">
              {footerData.company_bio}
            </p>

            <div className="flex gap-4 pt-2">
              {footerData.social_links.map((link, index) => {
                  const IconComponent = SocialIconMap[link.icon_name];
                  
                  return (
                      <a
                          key={index}
                          href={link.url}
                          aria-label={link.name}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-300 transition duration-200"
                      >
                          {IconComponent ? (
                              <IconComponent className="w-6 h-6 fill-current" />
                          ) : (
                              <div className="w-6 h-6" title={link.name} />
                          )}
                      </a>
                  );
              })}
            </div>
          </div>
          {footerData.footer_menus.map((menu, menuIndex) => (
              <nav key={menuIndex} className="flex flex-col space-y-2">
                  <h6 className="font-bold text-lg mb-2 text-white">
                      {menu.title}
                  </h6>
                  {menu.links.map((link, linkIndex) => (
                      <a 
                          key={linkIndex}
                          href={link.url}
                          className="link link-hover text-gray-200 hover:text-white transition"
                      >
                          {link.text}
                      </a>
                  ))}
              </nav>
          ))}
          
        </footer>
      </div>
      <h2 className="py-2 text-center">
        {footerData.copyright_text}
      </h2>
    </div>
  );
};

export default Footer;