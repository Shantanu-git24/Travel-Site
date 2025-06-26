import Image from 'next/image';

export default function WhyBook() {
  return (
    <section className="px-8 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Why Book Flight With Us</h2>
      <div className="flex flex-col md:flex-row items-center  gap-8">
        <div className=" md:w-1/2 flex justify-center ">
          <Image
          src="/images/image (1).png"
            alt="Traveler"
            width={500}
            height={500}
            className="object-cover "/>
        </div>
        <div className="w-full md:w-1/2 text-gray-700">
          <p className="mb-4">We offer domestic and international multi city bookings as per your choice of airlines, timings and preferred route at the most optimized fare. Our search experts deal with multiple agency’s to bring the hassle free booking experience. Our unmatched services on booking, cancellation and changes are well appreciated</p>
          <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
        </div>
      </div>
    </section>
  );
}
