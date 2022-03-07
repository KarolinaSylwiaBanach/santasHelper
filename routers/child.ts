import {Router} from "express";
import {ChildRecord} from "../records/child.record";
import {GiftRecord} from "../records/gift.record";
import {ValidationError} from "../utils/errors";

export const childRouter = Router();

childRouter
    .get('/', async (req, res) => {
        const childrenList = await ChildRecord.listAll();
        const giftsList = await GiftRecord.listAll();
        res.render('children/list', {
            childrenList,
            giftsList,
        });
    })
    .post('/', async (req, res) => {
        const newChild = new ChildRecord(req.body)
        await newChild.insert();
        res.redirect('/child')
    })
    .put('/gift/:id', async (req, res) => {
        const child = await ChildRecord.getOne(req.params.id);
        if(child === null){
            throw new ValidationError('No child with this id was found.')
        }
        const gift = req.body.giftId === '' ? null : await GiftRecord.getOne(req.body.giftId);

        if (gift){
            if (gift.count <= await gift.countGivenGifts()){
                throw new ValidationError('This gift is not enough.')
            }
        }

        child.giftId = gift?.id ?? null;
        await child.update();
    });
