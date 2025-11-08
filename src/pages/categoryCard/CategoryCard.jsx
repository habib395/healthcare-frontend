import React from "react";
// import doctorImage from "../../assets/slider/doctor.jpg"

const CategoryCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
      <div className="sm:hidden grid grid-cols-2 gap-4 max-w-4xl mx-auto p-4">
        <div className="col-span-1">
          <div className="card bg-base-100 w-full h-full border sm:shadow-lg overflow-hidden">
            <div className="card-body p-4 pb-0 text-start">
              <h2 className="card-title text-sm font-semibold mb-2">
                Video Consultation
              </h2>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-green-600"></div>
                <p className="text-gray-500 text-[10px]">Consult with Doctor</p>
              </div>

              <p className="text-gray-400 hidden sm:block">
                Get Instant video consultation or schedule your appointment.
              </p>
            </div>
            <figure>
              <img
                src="https://i.ibb.co/3m5wymQL/portrait-male-doctor-removebg-preview.png"
                alt="Doctor Image"
                className="rounded-xl w-full h-auto object-cover"
              />
            </figure>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <div className="card bg-base-100 w-full border sm:shadow-lg flex-grow overflow-hidden">
            <div className="card-body p-4 text-start flex-row items-center justify-between">
              <div className="flex-1 pr-2">
                <h3 className="text-sm sm:text-base font-bold mb-1">Diagnostic & Tests</h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Sample collection & reports delivery
                </p>
              </div>
              <figure className="w-1/4">
                <img
                  src="https://placehold.co/60x60/8B5CF6/ffffff?text=LAB"
                  alt="Diagnostic Image"
                  className="rounded-lg object-cover w-full h-auto"
                />
              </figure>
            </div>
          </div>
          <div className="sm:hidden flex card bg-base-100 w-full border flex-grow overflow-hidden">
            <div className="card-body p-4 text-start flex-row items-center justify-between">
              <div className="flex-1 pr-2">
                <h3 className="text-sm sm:text-base font-bold mb-1">
                  Healthcare Plans & Coverages
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Doctor visit, insurance & more
                </p>
              </div>
              <figure className="w-1/4">
                <img
                  src="https://placehold.co/60x60/EF4444/ffffff?text=PLAN"
                  alt="Insurance Plan Image"
                  className="rounded-lg object-cover w-full h-auto"
                />
              </figure>
            </div>
          </div>
          <div className="hidden sm:block card bg-base-100 w-full border flex-grow overflow-hidden">
            <div className="card-body p-4 text-start flex-row items-center justify-between">
              <div className="flex-1 pr-2">
                <h3 className="text-sm sm:text-base font-bold mb-1">
                  Healthcare Plans & Coverages
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Doctor visit, insurance & more
                </p>
              </div>
              <figure className="w-1/4">
                <img
                  src="https://placehold.co/60x60/EF4444/ffffff?text=PLAN"
                  alt="Insurance Plan Image"
                  className="rounded-lg object-cover w-full h-auto"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block card bg-base-100 sm:w-96 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/CsH6ynYW/doctor-two.jpg"
            alt="Shoes"
            className="rounded-xl h-52 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">
            Live Video Consultation.
          </h2>
          <p className="text-gray-400">
            Get Instant video consultation or schedule your appointment.
          </p>
        </div>
      </div>
      <div className="hidden sm:block card bg-base-100 sm:w-96 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/CsH6ynYW/doctor-two.jpg"
            alt="Shoes"
            className="rounded-xl h-52 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">
            Live Video Consultation.
          </h2>
          <p className="text-gray-400">
            Get Instant video consultation or schedule your appointment.
          </p>
        </div>
      </div>
      <div className="hidden sm:block card bg-base-100 sm:w-96 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/CsH6ynYW/doctor-two.jpg"
            alt="Shoes"
            className="rounded-xl h-52 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">
            Live Video Consultation.
          </h2>
          <p className="text-gray-400">
            Get Instant video consultation or schedule your appointment.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 sm:w-96 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/CsH6ynYW/doctor-two.jpg"
            alt="Shoes"
            className="rounded-xl h-52 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">
            Live Video Consultation.
          </h2>
          <p className="text-gray-400">
            Get Instant video consultation or schedule your appointment.
          </p>
        </div>
      </div>

      <div className="card bg-base-100 sm:w-96 shadow-xl hidden sm:block">
        <figure>
          <img
            src="https://i.ibb.co/CsH6ynYW/doctor-two.jpg"
            alt="Shoes"
            className="rounded-xl h-52 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">
            Live Video Consultation.
          </h2>
          <p className="text-gray-400">
            Get Instant video consultation or schedule your appointment.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 sm:w-96 shadow-xl hidden sm:block">
        <figure>
          <img
            src="https://i.ibb.co/CsH6ynYW/doctor-two.jpg"
            alt="Shoes"
            className="rounded-xl h-52 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">
            Live Video Consultation.
          </h2>
          <p className="text-gray-400">
            Get Instant video consultation or schedule your appointment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
