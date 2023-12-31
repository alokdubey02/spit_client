import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { API_URL } from '../config';

export default function StepHead({ activeStep, steps }) {
    return (
        <Stepper activeStep={activeStep} alternativeLabel sx={{ padding: '2.5% 12.5%', margin: 'auto', borderRadius: '8px', minWidth: 1000 }}>
            {steps.map((label, index) => {
                const stepProps = {};
                return (
                    <Step key={label} {...stepProps} sx={{
                        '& .Mui-active .MuiStepConnector-line': {
                            border: '1.25px solid #10A44B', // line color (active)
                        },
                        '& .Mui-completed .MuiStepConnector-line': {
                            border: '1.25px solid #10A44B', // line color (completed)
                        },
                        '& .MuiStepLabel-root .Mui-completed': {
                            color: '#10A44B', // circle color (COMPLETED)
                        },
                        '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                        {
                            color: '#10A44B', // Just text label (COMPLETED)
                        },
                        '& .MuiStepLabel-iconContainer.Mui-disabled svg': {
                            color: '#fff', // circle color (INACTIVE)
                            border: '1px solid grey',
                            borderRadius: '50%',
                        },
                        '& .MuiStepLabel-root .Mui-active': {
                            color: '#fff', // circle color (ACTIVE)
                        },
                        '& .Mui-active.MuiStepLabel-iconContainer': {
                            color: '#fff', 
                            border: '2px solid #10A44B',
                            borderRadius: '50%',
                        },
                        '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                        {
                            color: '#10A44B', 
                        },
                        '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                            fill: '#10A44B', 
                        },
                        '& .MuiStepLabel-root .Mui-disabled .MuiStepIcon-text': {
                            fill: 'grey',
                        },
                    }}>
                        <StepLabel >{label} </StepLabel>
                    </Step>
                );
            })}
        </Stepper>
    )
}
