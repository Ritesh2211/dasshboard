import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';

// Sample tree data
const MUI_X_PRODUCTS: TreeViewBaseItem[] = [
  {
    id: 'grid',
    label: 'Data Grid',
    children: [
      { id: 'grid-community', label: '@mui/x-data-grid' },
      { id: 'grid-pro', label: '@mui/x-data-grid-pro' },
      { id: 'grid-premium', label: '@mui/x-data-grid-premium' },
    ],
  },
  {
    id: 'pickers',
    label: 'Date and Time Pickers',
    children: [
      { id: 'pickers-community', label: '@mui/x-date-pickers' },
      { id: 'pickers-pro', label: '@mui/x-date-pickers-pro' },
    ],
  },
  {
    id: 'charts',
    label: 'Charts',
    children: [{ id: 'charts-community', label: '@mui/x-charts' }],
  },
  {
    id: 'tree-view',
    label: 'Tree View',
    children: [{ id: 'tree-view-community', label: '@mui/x-tree-view' }],
  },
];

// Styled TreeItem component
const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  color: '#FFFFFF', // Set the main text color to white for contrast
  [`& .${treeItemClasses.content}`]: {
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
    backgroundColor: '#05070A', 
    [`& .${treeItemClasses.label}`]: {
      fontSize: '0.9rem',
      fontWeight: 500,
      color: '#FFFFFF', // Text color to ensure visibility
    },
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(0, 1.2),
    ...theme.applyStyles('light', {
      backgroundColor: alpha(theme.palette.primary.main, 0.25),
    }),
    ...theme.applyStyles('dark', {
      color: theme.palette.primary.contrastText,
    }),
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    border: `1px dashed ${alpha('#1E1E2F', 0.4)}`, // Adjust border color for dark theme
  },
}));

const CustomStyling: React.FC = () => {
  return (
    <Card sx={{ border: '1px solid #212732', backgroundColor: '#05070A', display: 'flex',  height: 'auto' ,marginTop:0.5,width:390}}>
      <CardContent sx={{ padding: 3, flex: 1 }}>
        <Typography variant="h6" fontSize={16} sx={{ color: '#FFFFFF', mb: 2 }}>
          Product Tree
        </Typography>
        <Box sx={{ minHeight: 3, minWidth: 240, height: 'auto' }}>
          <RichTreeView
            defaultExpandedItems={['grid']}
            slots={{ item: CustomTreeItem }}
            items={MUI_X_PRODUCTS}
            sx={{
              '& .MuiTreeItem-content': {
                transition: 'all 0.3s ease', // Smooth transition for expanding/collapsing
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomStyling;
