INSERT INTO olt_prescription_med_detail (PSCRIPT_ID, PAT_ID, DOC_ID, MED_STAND_CODE, MED_INSUR_CODE
    , MED_TYPE, MED_ID, MED_CODE, MED_CHEM_NAME, MED_NAME
    , MED_ABBREV, MED_DESCR, MED_SPECIFICAIONS, MED_WAY_NAME, MED_FORM_NAME
    , MED_UNIT, MED_PRICE, PRES_SUSTAINED_DAYS, FREQUENCY, MED_USAGE
    , MED_COUNT, MED_SELF_COST, MED_HEAL_COST, MED_PIC, IS_HEAL
    , CREATE_TIME, UPDATE_TIME, IS_DELETED, FREQUENCY_QTY, FREQUENCY_CODE
    , ONE_DOSAGE, ONE_DOSAGE_UNIT, TOTAL_DOSAGE, TOTAL_DOSAGE_UNIT, MIN_PACK_UNIT
    , UNIT_COEFFICIENT, MIN_PACKUNIT_COEFFICIENT, USAGE_CODE, isPresDrug, drug_source
    , drug_usage, MED_FORM_CODE, MIN_PACK_NUM, REMARK, APPERANCE_UNIT)
SELECT @_newPscriptId, NULL, NULL, MED_STAND_CODE, MED_INSUR_CODE
    , MED_TYPE, MED_ID, MED_CODE, MED_CHEM_NAME, MED_NAME
    , MED_ABBREV, MED_DESCR, MED_SPECIFICAIONS, MED_WAY_NAME, MED_FORM_NAME
    , MED_UNIT, MED_PRICE, PRES_SUSTAINED_DAYS, FREQUENCY, MED_USAGE
    , MED_COUNT, MED_SELF_COST, MED_HEAL_COST, MED_PIC, IS_HEAL
    , CREATE_TIME, UPDATE_TIME, IS_DELETED, FREQUENCY_QTY, FREQUENCY_CODE
    , ONE_DOSAGE, ONE_DOSAGE_UNIT, TOTAL_DOSAGE, TOTAL_DOSAGE_UNIT, MIN_PACK_UNIT
    , UNIT_COEFFICIENT, MIN_PACKUNIT_COEFFICIENT, USAGE_CODE, isPresDrug, drug_source
    , drug_usage, MED_FORM_CODE, MIN_PACK_NUM, REMARK, APPERANCE_UNIT
FROM olt_prescription_med_detail
WHERE PSCRIPT_ID IN (SELECT PSCRIPT_ID
    FROM olt_prescription_ol
    WHERE (ACCESS_VISIT_ID, BATCH_NO) IN (SELECT ACCESS_VISIT_ID, BATCH_NO
        FROM olt_prescription_ol
        WHERE PSCRIPT_ID = @_pscriptId));