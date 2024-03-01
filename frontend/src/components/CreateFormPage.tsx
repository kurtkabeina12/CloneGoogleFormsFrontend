import { Box, Fab, FormControl, FormControlLabel, Grid, IconButton, InputLabel, MenuItem, Paper, Switch, TextField, Tooltip } from '@mui/material';
import React from 'react';
import '../styles/main.css';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SubjectIcon from '@mui/icons-material/Subject';
import ShortTextIcon from '@mui/icons-material/ShortText';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import EventIcon from '@mui/icons-material/Event';
import { useSelector } from 'react-redux';
import InputCopmponent from './InputCopmponent';
import TextareaComponent from './TextareaComponent';
import { RootState } from '../types/types';
import { useDispatch } from 'react-redux';
import { setSelectedComponent } from '../store/action/actionForm';
import RadioComponent from './RadioComponent';
import CheckboxesComponent from './CheckboxesComponent';
import DataComponent from './DataComponent';

interface CreateFormPageProps {
}


const CreateFormPage: React.FC<CreateFormPageProps> = () => {
	const dispatch = useDispatch();
	const [cards, setCards] = React.useState([{ selectedComponent: '', question: '', isRequired: false }]);

	const handleSelectChange = (event: SelectChangeEvent<string>, index: number) => {
		const newCards = [...cards];
		newCards[index].selectedComponent = event.target.value;
		setCards(newCards);
	};

	const handleDeleteCard = (index: number) => {
		const newCards = cards.filter((card, cardIndex) => cardIndex !== index); //убираем карточку с поля
		setCards(newCards); // Обновляем состояние с новым массивом
	 };
	 
	 const handleDuplicateCard = (index: number) => {
		const newCards = [...cards]; // Создаем копию массива
		const duplicatedCard = { ...newCards[index] }; // Создаем копию карточки
		newCards.splice(index + 1, 0, duplicatedCard); // Вставляем дублированную карточку сразу после текущей
		setCards(newCards); // Обновляем состояние с новым массивом
	 };
	 
	return (
		<form>
			<Grid container spacing={3} className='header-CreateFormPage' >
				<Grid item xs={12} sm={8} md={6}>
					<Box sx={{ mb: 3 }}>
						<Paper className="header-paper" elevation={2} sx={{ p: 3, borderTop: "8px solid #00862b" }}>
							<TextField
								variant="standard"
								placeholder="Название опроса"
								name="title"
								sx={{ mb: 3 }}
								fullWidth
							/>
						</Paper>
					</Box>
				</Grid>
				<Grid container spacing={3} className='body-CreateFormPage'>
					{cards.map((card, index) => (
						<Grid item xs={12} sm={8} md={6} className='body-card'>
							<Box sx={{ mb: 3 }}>
								<Paper elevation={2} sx={{ p: 3, paddingTop: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", borderLeft: "8px solid #00862b" }}>
									<DragIndicatorIcon style={{ transform: "rotate(90deg)", marginBottom: '10px' }} />
									<Box sx={{ display: 'flex', flexDirection: "row", width: "-webkit-fill-available", gap: 1 }}>
										<TextField
											variant="standard"
											placeholder="Напишите вопрос"
											name="title"
											sx={{ mb: 3 }}
											fullWidth
										/>
										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">Тип ответа</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={card.selectedComponent}
												label="Тип ответа"
												onChange={(event) => handleSelectChange(event, index)}
												color='success'
											>
												<MenuItem value="Input">
													<ShortTextIcon
														sx={{
															color: "#6b6b6b",
															marginRight: "5px",
														}}
													/>
													Короткий текст
												</MenuItem>
												<MenuItem value="Textarea">
													<SubjectIcon
														sx={{
															color: "#6b6b6b",
															marginRight: "5px",
														}}
													/>
													Длинный текст
												</MenuItem>
												<MenuItem value="Radio">
													<RadioButtonCheckedIcon
														sx={{
															color: "#6b6b6b",
															marginRight: "5px",
														}}
													/>
													Один из списка
												</MenuItem>
												<MenuItem value="Checkbox">
													<CheckBoxOutlinedIcon
														sx={{
															color: "#6b6b6b",
															marginRight: "5px",
														}}
													/>
													Множество из списка
												</MenuItem>
												<MenuItem value="Data">
													<EventIcon
														sx={{
															color: "#6b6b6b",
															marginRight: "5px",
														}}
													/>
													Дата
												</MenuItem>
											</Select>
										</FormControl>
									</Box>
									{card.selectedComponent === 'Input' && <InputCopmponent />}
									{card.selectedComponent === 'Textarea' && <TextareaComponent />}
									{card.selectedComponent === 'Radio' && <RadioComponent />}
									{card.selectedComponent === 'Checkbox' && <CheckboxesComponent />}
									{card.selectedComponent === 'Data' && <DataComponent />}
									<Grid item xs={12}>
										<Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', borderTopColor: "black" }}>
											<FormControlLabel control={<Switch color='success' />} style={{ whiteSpace: 'nowrap' }} label="Обязательный вопрос*" />
											<Tooltip title="Удалить карточку">
												<IconButton aria-label="delete" color="warning" size="small" onClick={() => handleDeleteCard(index)}>
													<DeleteIcon style={{ color: "red" }} />
												</IconButton>
											</Tooltip>
											<Tooltip title="Дублировать карточку">
												<IconButton aria-label="duplicate" color="success" size="small" onClick={() => handleDuplicateCard(index)}>
													<FileCopyIcon />
												</IconButton>
											</Tooltip>
										</Box>
									</Grid>
								</Paper>
							</Box>
						</Grid>
					))}
				</Grid>
				<div>
					<Fab
						size="medium"
						color="success"
						aria-label="add"
						onClick={() => setCards([...cards, { selectedComponent: '', question: '', isRequired: false }])}
					>
						<AddIcon />
					</Fab>
				</div>
			</Grid>
		</form >
	);
}

export default CreateFormPage;
