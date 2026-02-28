document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const clickedCourse = urlParams.get('course');
    const country = urlParams.get('country');

    const courseData = {
        'business-101': {
            title: 'Business 101',
            description: 'Business 101 is an introductory course designed to provide students with a foundational understanding of the world of business, with a special emphasis on financial literacy and decision-making. The course explores key concepts in economics, entrepreneurship, marketing, management, and accounting, while equipping students with the tools to analyze financial statements, understand the role of money and markets, and make informed personal and professional financial decisions.',
            points: [
                'Understand the basics of economics, entrepreneurship, and management',
                'Analyze financial statements and make informed decisions',
                'Develop practical skills for real-world business scenarios'
            ]
        },
        'finance-101': {
            title: 'Finance 101',
            description: 'Finance 101 introduces students to the fundamental principles of finance and the role it plays in both personal and business contexts. The course provides a comprehensive overview of financial concepts such as time value of money, risk and return, interest rates, investment analysis, and the basics of corporate and personal finance.',
            points: [
                'Master the time value of money and investment analysis',
                'Understand risk, return, and interest rates',
                'Apply financial principles to personal and business decisions'
            ]
        },
        'marketing-101': {
            title: 'Marketing 101',
            description: 'Marketing 101 is a practical, hands-on course designed to equip students with the knowledge and skills needed to make smart, confident financial decisions throughout life. This course covers essential topics like budgeting, saving, managing debt, understanding credit, and planning for major life expenses such as college, a car, or retirement.',
            points: [
                'Learn budgeting, saving, and debt management',
                'Understand credit and major life expense planning',
                'Gain confidence in making financial decisions'
            ]
        }
    };

    const countryNames = {
        'us': 'United States',
        'india': 'India'
    };

    const data = courseData[clickedCourse];
    document.getElementById('course-title').innerText = data.title;
    document.getElementById('country').innerText = countryNames[country];
    document.getElementById('course-description').innerText = data.description;

    const pointsList = document.getElementById('learning-points');
    pointsList.innerHTML = '';
    data.points.forEach(point => {
        const li = document.createElement('li');
        li.innerText = point;
        pointsList.appendChild(li);
    });

    document.querySelector('button').addEventListener('click', () => {
        window.location.href = `course-enrollment?course=${clickedCourse}&country=${country}`;
    });
});