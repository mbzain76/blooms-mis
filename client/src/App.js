import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Class from './Classes';
import ClassList from './class-pages/ClassList';
import Login from './Login';
import Fee from './FeeView';
import AddStudent from './add-pages/AddStudent';
import AddFather from './add-pages/AddFather';
import AddMother from './add-pages/AddMother';
import AddGuardian from './add-pages/AddGuardian'; 
import AddMedical from './add-pages/AddMedical'; 
import Beginner from './class-pages/Beginner';
import PP1 from './class-pages/PP1';
import PP2 from './class-pages/PP2';
import Grade1 from './class-pages/Grade1';
import Grade2 from './class-pages/Grade2';
import AddedStudent from './add-pages/AddedStudent';
import AddedS from './add-pages/AddedS';
import AboutStudent from './about-pages/AboutStudent';
import AboutFather from './about-pages/AboutFather';
import AboutMother from './about-pages/AboutMother';
import AboutGaurdian from './about-pages/AboutGaurdian';
import AboutMedical from './about-pages/AboutMedical';
import EditStudent from './edit-pages/EditStudent';
import EditFather from './edit-pages/EditFather';
import EditMother from './edit-pages/EditMother';
import EditGuardian from './edit-pages/EditGuardian';
import EditMedical from './edit-pages/EditMedical';
import StudentFeesPage from './about-pages/StudentFeesPage';
import EditStudentFeesBasic from './edit-pages/EditStudentFeesBasic';
import EditStudentFeesOptional from './edit-pages/EditStudentFeesOptional';
import EditStudentFeeTransport from './edit-pages/EditStudentFeeTransport';
import AddStudentFees from './add-pages/AddStudentFees';
import AddOptionalFees from './add-pages/AddOptionalFees';
import AddTransportFees from './add-pages/AddTransportFees';
import ClassEmailSelected from './email-pages/ClassEmailSelected';
import ClassEmailRecipients from './email-pages/ClassEmailRecipients';
import RetrieveClassEmails from './email-pages/RetrieveClassEmails';
import EmailsRetrieved from './email-pages/EmailsRetrieved';
import ClassFeeStructure from './class-pages/ClassFeeStructure';
import EditClassFeeStructure from './edit-pages/EditClassFeeStructure';
import NewStudentAdded from './components/modal-windows/NewStudentAdded';
import BeginnerFeeStructure from './class-pages/BeginnerFeeStructure';
import StudentEmailSelected from './email-pages/StudentEmailSelected';


const App = () =>{
    
                return(

                             <BrowserRouter>
                                 <Switch>
                                 <Route exact path={"/"} component={Login}></Route>
                                 <Route  path={"/home"} component={Class}></Route>                     
            <Route  path={"/class"} component={ClassList}></Route>
            <Route  path={"/fee"} component={Fee}></Route>
            <Route  path={"/adds"} component={AddStudent}></Route>
            <Route  path={"/addf"} component={AddFather}></Route>
            <Route  path={"/addm"} component={AddMother}></Route>
            <Route  path={"/addg"} component={AddGuardian}></Route>
            <Route  path={"/addmed"} component={AddMedical}></Route>
            <Route  path={"/beginner"} component={Beginner}></Route>
            <Route  path={"/pp1"} component={PP1}></Route>
            <Route  path={"/pp2"} component={PP2}></Route>
            <Route  path={"/grade1"} component={Grade1}></Route>
            <Route  path={"/grade2"} component={Grade2}></Route>
            <Route  path={"/addedpopup"} component={AddedStudent}></Route>
            <Route  path={"/added"} component={AddedS}></Route>
            <Route  path={"/abs/:id"} component={AboutStudent}></Route>
            <Route  path={"/abf/:id"} component={AboutFather}></Route>
            <Route  path={"/abm/:id"} component={AboutMother}></Route>
            <Route  path={"/abg/:id"} component={AboutGaurdian}></Route>
            <Route  path={"/abmed/:id"} component={AboutMedical}></Route>
            <Route  path={"/eds/:id"} component={EditStudent}></Route>
            <Route  path={"/edf/:id"} component={EditFather}></Route>
            <Route  path={"/edm/:id"} component={EditMother}></Route>
            <Route  path={"/edg/:id"} component={EditGuardian}></Route>
            <Route  path={"/edmed/:id"} component={EditMedical}></Route>
            <Route  path={"/abfees/:id"} component={StudentFeesPage}></Route>
            <Route  path={"/edfeebasic/:id"} component={EditStudentFeesBasic}></Route>
            <Route  path={"/edfeeoptional/:id"} component={EditStudentFeesOptional}></Route>
            <Route  path={"/edfeetransport/:id"} component={EditStudentFeeTransport}></Route>
            <Route  path={"/addsfee"} component={AddStudentFees}></Route>
            <Route  path={"/addoptionalfee"} component={AddOptionalFees}></Route>
            <Route  path={"/addtransportfee"} component={AddTransportFees}></Route>
            <Route  path={"/class-email-selected"} component={ClassEmailSelected}></Route>
            <Route  path={"/class-email-recipients"} component={ClassEmailRecipients}></Route>
            <Route  path={"/retrieve-emails"} component={RetrieveClassEmails}></Route>
            <Route  path={"/retrieved-emails"} component={EmailsRetrieved}></Route>
            <Route  path={"/edit-class-fee-structure"} component={EditClassFeeStructure}></Route>
            <Route  path={"/class-fee-structure"} component={ClassFeeStructure}></Route>
            <Route  path={"/new-student-added"} component={NewStudentAdded}></Route>
            <Route path={"/beginner-fee-structure"} component={BeginnerFeeStructure}></Route>
            <Route path={"/student-email-selected"} component={StudentEmailSelected}></Route>
            
                                 </Switch>
           
            </BrowserRouter>
                      
                        
                                  
                        
        )
    
}

export default App;

