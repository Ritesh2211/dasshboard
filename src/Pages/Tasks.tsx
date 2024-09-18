import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Define styled components
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#05070A',
  color: '#FFFFFF',
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: 8,
  border: `1px solid #212732`,
}));

const Tasks: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any>(null);

  const rows = [
    { id: 1, task: 'Design new feature', status: 'In Progress', dueDate: '2024-09-20' },
    { id: 2, task: 'Fix bugs in module', status: 'Completed', dueDate: '2024-09-15' },
    { id: 3, task: 'Update documentation', status: 'Not Started', dueDate: '2024-09-30' },
    { id: 4, task: 'Prepare for release', status: 'In Progress', dueDate: '2024-10-01' },
  ];

  const handleRowClick = (task: any) => {
    setSelectedTask(task);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTask(null);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: { xs: 4, md: 2 }, backgroundColor: '#05070A' }}>
      <Typography variant="h6" gutterBottom color="#FFFFFF">
        Tasks Overview
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Item sx={{ flex: 1, minWidth: '300px', height: '200px' }}>
          <Typography variant="h6" gutterBottom color="#FFFFFF">
            Total Tasks
          </Typography>
          <Typography variant="h4" color="#FFFFFF">
            120
          </Typography>
          <Typography variant="caption" color="#94a0b8">
            All tasks in the system
          </Typography>
        </Item>

        <Item sx={{ flex: 1, minWidth: '300px', height: '200px' }}>
          <Typography variant="h6" gutterBottom color="#FFFFFF">
            Tasks Completed
          </Typography>
          <Typography variant="h4" color="#FFFFFF">
            45
          </Typography>
          <Typography variant="caption" color="#94a0b8">
            Tasks completed in last month
          </Typography>
        </Item>

        <Item sx={{ flex: 1, minWidth: '300px', height: '200px' }}>
          <Typography variant="h6" gutterBottom color="#FFFFFF">
            Tasks in Progress
          </Typography>
          <Typography variant="h4" color="#FFFFFF">
            30
          </Typography>
          <Typography variant="caption" color="#94a0b8">
            Current ongoing tasks
          </Typography>
        </Item>

        <Item sx={{ flex: 1, minWidth: '300px', height: '200px' }}>
          <Typography variant="h6" gutterBottom color="#FFFFFF">
            Upcoming Deadlines
          </Typography>
          <Typography variant="h4" color="#FFFFFF">
            10
          </Typography>
          <Typography variant="caption" color="#94a0b8">
            Tasks due in the next week
          </Typography>
        </Item>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom color="#FFFFFF">
          Task List
        </Typography>
        <Paper elevation={3} sx={{ padding: 2, borderRadius: 8, border: `1px solid #212732` }}>
          <TableContainer component={Paper} sx={{ backgroundColor: '#05070A' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: '#FFFFFF' }}>ID</TableCell>
                  <TableCell sx={{ color: '#FFFFFF' }}>Task</TableCell>
                  <TableCell sx={{ color: '#FFFFFF' }}>Status</TableCell>
                  <TableCell sx={{ color: '#FFFFFF' }}>Due Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    onClick={() => handleRowClick(row)}
                    sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#1F2329' } }}
                  >
                    <TableCell sx={{ color: '#FFFFFF' }}>{row.id}</TableCell>
                    <TableCell sx={{ color: '#FFFFFF' }}>{row.task}</TableCell>
                    <TableCell sx={{ color: '#FFFFFF' }}>{row.status}</TableCell>
                    <TableCell sx={{ color: '#FFFFFF' }}>{row.dueDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
        <Item sx={{ flex: 1, minWidth: '300px', height: '200px' }}>
          <Typography variant="h6" gutterBottom color="#FFFFFF">
            Task Completion Rate
          </Typography>
          <Typography variant="body2" color="#FFFFFF">
            75% Completed
          </Typography>
          <LinearProgress variant="determinate" value={75} sx={{ marginTop: 2, backgroundColor: '#212732' }} />
        </Item>

        <Item sx={{ flex: 1, minWidth: '300px', height: '200px' }}>
          <Typography variant="h6" gutterBottom color="#FFFFFF">
            Upcoming Deadlines
          </Typography>
          <Typography variant="body2" color="#FFFFFF">
            3 Tasks due soon
          </Typography>
          <LinearProgress variant="determinate" value={30} sx={{ marginTop: 2, backgroundColor: '#212732' }} />
        </Item>
      </Box>

      {/* Task Details Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Task Details</DialogTitle>
        <DialogContent>
          {selectedTask && (
            <Box>
              <Typography variant="h6" color="#FFFFFF">Task ID: {selectedTask.id}</Typography>
              <Typography variant="body1" color="#FFFFFF">Task: {selectedTask.task}</Typography>
              <Typography variant="body1" color="#FFFFFF">Status: {selectedTask.status}</Typography>
              <Typography variant="body1" color="#FFFFFF">Due Date: {selectedTask.dueDate}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Tasks;
