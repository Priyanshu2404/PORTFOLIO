
const Certifications=[
    {
        title:"Supply Chain Operations",
        issuer:"Flipkart",
        date:"30th May 2025",
        link:"https://app.certif-id.com/certificate-view/4adf199abe29020fd8b505016775d3ad8b7740c93d15351ff023f7933a11f43d",

    },
    {
        title:"Java Programming",
        issuer:"CodSoft",
        date:"23rd July 2024",
        link:"https://codsoft.co.in",
        certificateid:"726e0fd",
    },
    {
        title:"Software Engineering Job Simulation",
        issuer:"JP Morgan Chase & Co.",
        date:"5th May 2024",
        link:"https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_yzD8agQ45esGE8gn8_1714906346798_completion_certificate.pdf",

    },
    {
        title:"Software Engineering Job Simulation",
        issuer:"Goldman Sachs",
        date:"21st April 2024",
        link:"https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_yzD8agQ45esGE8gn8_1713696392953_completion_certificate.pdf"
    },
];

export default function certifications (){
    return (
        <section id="certifications" className="bg-[#0F1116] text-white py-20 px-6 flex justify-center items-center min-h-screen">
            <div className="max-w-8x1 mx-auto text-center">
                <h2 className="from-pink-500 via-purple-500 to-blue-500 bg-gradient-to-r bg-clip-text font-bold text-4xl text-transparent">CERTIFICATIONS</h2>
                <div className="grid md:grid-cols-2 gap-8 mt-20">
                    {Certifications.map((cert,index)=>(
                        <div
                        key={index}
                        className="p-6 mt-10 hover:shadow-x1 transition-shadow duration-300 relative group overflow-hidden rounded-xl shadow-lg border border-gray-700">
                        
                        <h3 className="text-x1 font-semibold text-white mb-2">{cert.title}</h3>
                        <p className="text-sm text-red-400">Issued by: {cert.issuer}</p>
                        <p className="text-sm text-green-300">Date: {cert.date}</p>
                        <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-400 hover:underline">View Certifications --</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};