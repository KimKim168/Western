import React from 'react'
import WesternLayout from '../WesternLayout'
import HeaderAllPage from '../components/HeaderAllPage';
import ExchangeProgram from '../components/ExchangeProgram'; // ← make sure the path is correct

const Index = () => {
  const Data = {
    title: 'Programs',
    long_description: '',
    images: [{ image: 'hero.JPG' }],
    children: [
      {
        id: 1,
        title: "Student Exchange Overview",
        title_kh: "ព័ត៌មានអំពីកម្មវិធីប្ដូរនិស្សិត",
        long_description: `
          <p>The Student Exchange Program allows learners to explore new cultures,
          improve language skills, and gain international academic experience.</p>
          <ul>
            <li>1–6 month exchange duration</li>
            <li>Partner schools across Asia & Europe</li>
            <li>Full academic credit transfer</li>
          </ul>
        `,
        long_description_kh: `
          <p>កម្មវិធីប្ដូរនិស្សិតជួយឱ្យសិស្សបានស្វែងរកវប្បធម៌ថ្មីៗ
          បង្កើនជំនាញភាសា និងទទួលបទពិសោធន៍សិក្សាអន្តរជាតិ។</p>
        `,
        images: [{ image: "image1.jpg" }]
      },

      {
        id: 2,
        title: "Partner Universities",
        title_kh: "សាកលវិទ្យាល័យដើម្បីជួយសហការណ៍",
        long_description: `
          <p>Our program collaborates with prestigious universities worldwide,
          giving students access to excellent academic environments.</p>
          <ul>
            <li>Chulalongkorn University – Thailand</li>
            <li>Kyoto University – Japan</li>
            <li>University of Malaya – Malaysia</li>
          </ul>
        `,
        long_description_kh: `
          <p>កម្មវិធីនេះសហការជាមួយសាកលវិទ្យាល័យល្បីៗក្នុងពិភពលោក
          ដើម្បីផ្តល់ឱ្យសិស្សនូវបរិយាកាសសិក្សាដ៏ចំរូងចំរាស។</p>
        `,
        images: [{ image: "image1.jpg" }]
      },

      {
        id: 3,
        title: "Scholarships & Support",
        title_kh: "អាហារូបករណ៍ និងការគាំទ្រ",
        long_description: `
          <p>Eligible students may receive financial support for travel, housing,
          and tuition fees.</p>
          <p>Support includes:</p>
          <ul>
            <li>Up to 70% tuition sponsorship</li>
            <li>Monthly living allowance</li>
            <li>Travel reimbursement</li>
          </ul>
        `,
        long_description_kh: `
          <p>សិស្សដែលមានលក្ខណៈសម្បត្តិត្រូវបានផ្តល់ជូនអាហារូបករណ៍
          សម្រាប់ការធ្វើដំណើរ កន្លែងស្នាក់នៅ និងថ្លៃសិក្សា។</p>
        `,
        images: [{ image: "image1.jpg" }]
      },

      {
        id: 4,
        title: "How to Apply",
        title_kh: "របៀបដាក់ពាក្យ",
        long_description: `
          <p>Students can apply online by completing the application form and
          submitting the required documents.</p>
          <p>Required documents:</p>
          <ul>
            <li>Transcript</li>
            <li>Passport copy</li>
            <li>Recommendation letter</li>
          </ul>
        `,
        long_description_kh: `
          <p>សិស្សអាចដាក់ពាក្យតាមរយៈប្រព័ន្ធអនឡាញ ដោយបំពេញទម្រង់ និងដាក់ឯកសារចាំបាច់។</p>
        `,
        images: [{ image: "image1.jpg" }]
      }
    ]
  };

  return (
    <WesternLayout>
      {/* ✅ Add this — the main program content */}
      <ExchangeProgram children={Data.children} />
    </WesternLayout>
  );
}

export default Index;
