import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {MuiTypography} from './components/MuiTypography';
import {MuiButton} from './components/MuiButton';
import {MuiTextField} from './components/MuiTextField';
import {MuiSelect} from './components/MuiSelect';
import {MuiRadioButton} from './components/MuiRadioButton';
import {MuiCheckBox} from './components/MuiCheckBox';
import {MuiSwitch} from './components/MuiSwitch';
import {MuiRating} from './components/MuiRating';
import {MuiAutoComplete} from './components/MuiAutoComplete';
import {MuiLayout} from './components/MuiLayout';
import {MuiCard} from './components/MuiCard'
import {MuiAccordion} from './components/MuiAccordion';
import {MuiImageList} from './components/MuiImageList';
import {MuiNavbar} from './components/MuiNavbar';
import {MuiLink} from './components/MuiLink';
import {MuiBreadcrumbs} from './components/MuiBreadcrumbs';
import {MuiDrawer} from './components/MuiDrawer';
import {MuiSpeedDial} from './components/MuiSpeedDial';
import {MuiBottomNavigation} from './components/MuiBottomNavigation'
import {MuiAvatar} from './components/MuiAvatar';
import {MuiBadge} from './components/MuiBadge';
import {MuiList} from './components/MuiList';
import {MuiChip} from './components/MuiChip';
import {MuiTooltip} from './components/MuiTooltip';
import {MuiTable} from './components/MuiTable';
import {MuiAlert} from './components/MuiAlert';
import {MuiSnackbar} from './components/MuiSnackbar';
import {MuiDialog} from './components/MuiDialog';
import {MuiProgress} from './components/MuiProgress';
import {MuiSkeleton} from './components/MuiSkeleton';
import {MuiLoadingButton} from './components/MuiLoadingButton';
import {MuiPicker} from './components/MuiPicker';
import {MuiTabs} from './components/MuiTabs';
import {MuiTimeline} from './components/MuiTimeline';
import {MuiMasonry} from './components/MuiMasonry';
import {MuiResponsiveness} from './components/MuiResponsiveness';

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.teal[400],
    },
  neutral: {
    main: colors.grey[500],
    darker: colors.grey[700],
  },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiTextField /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
     {/* <MuiCheckBox /> */}
     {/* <MuiSwitch /> */}
     {/* <MuiRating /> */}
     {/* <MuiAutoComplete /> */}
     {/* <MuiLayout /> */}
     {/* <MuiCard /> */}
     {/* <MuiAccordion /> */}
     {/* <MuiImageList /> */}
     {/* <MuiNavbar /> */}
     {/* <MuiLink /> */}
     {/* <MuiBreadcrumbs />
     <MuiDrawer /> */}
     {/* <MuiSpeedDial />
     <MuiBottomNavigation />
     <MuiAvatar />
     <MuiBadge /> */}
     {/* <MuiList />
     <MuiChip /> */}
     {/* <MuiTooltip /> */}
     {/* <MuiTable /> */}
     {/* <MuiAlert /> */}
     {/* <MuiSnackbar />
     <MuiDialog /> */}
     {/* <MuiProgress /> */}
    {/* <MuiSkeleton /> */}
    {/* <MuiLoadingButton /> */}
    {/* <MuiPicker />
    <MuiTabs />
    <MuiTimeline /> */}
    {/* <MuiMasonry /> */}
    <MuiResponsiveness />
    </div>
    </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
