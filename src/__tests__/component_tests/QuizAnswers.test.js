import React from 'react';
import { shallow } from 'enzyme';
import QuizAnswers from '../../components/QuizAnswers';


describe('QuizAnswers', () =>{

    let quizanswers = shallow(<QuizAnswers />)

   describe('renders components correctly',() =>{
     it('renders correctly', () => {
       expect(quizanswers).toMatchSnapshot();    
     })
   }) 
})