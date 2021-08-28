
export const environment = {
  production: false,
  url: 'http://18.230.79.100:8082/',
  node: 'http://18.230.79.100:4545',
  stmp:'https://contract.stamping.io',

  TokenStamping:'18b22960dff87d346b9ae90c2f958391ba59310e46946151262683bad54',



  /* ESTADOS DE CERTIFICADO */
  STATUS_REG: {
    DISABLED: 0,
    ENABLED: 1,
    COMPLETED: 2
  },

  /* TABLAS EN BD SQLITE  */
  TABLE: {
    USER: 'user',
    CERT: 'certificado',
    IMG: 'images'
  },


  MSG: {

    TYPE_SUC: 'success',
    TYPE_ALERT: 'alert',
    TYPE_UPLOAD: 'upload',
    TYPE_ERROR: 'danger',


    SUC_UPLOAD: 'Certificación completada correctamente.',
    SUC_CREATE: 'La información fue guardada correctamente.',
    SUC_DISABLED: 'La identidad fue deshabilitada correctamente.',
    SUC_ENABLED: 'La identidad fue habilitada correctamente.',
    SUC_DELETE: 'La identidad fue revocarda correctamente.',
    SUC_SIGN: 'It was done successfully',

    ALERT_SIGN: 'Esta seguro de firmar información?',
    ALERT_CREATE: 'Esta seguro en guardar información de certificado?',
    ALERT_DISABLED: 'Esta seguro de deshabilitar esta identidad?',
    ALERT_ENABLED: 'Esta seguro de habilitar esta identidad?',
    ALERT_DELETE: 'Esta seguro de revocar esta identidad?',

    ALERT_UPLOAD: 'Se usarán datos para esta acción. Esta seguro de subir información?',
    ERROR_GENERAL: 'Tuvimos problemas, vuelva a intentar por favor.',

    SUC_TITLE: 'Success!',
    ALERT_TITLE: 'Alert!',
    ERROR_TITLE: 'Error!',
  },

  
  abi:'W3siaW5wdXRzIjpbXSwicGF5YWJsZSI6ZmFsc2UsInN0YXRlTXV0YWJpbGl0eSI6Im5vbnBheWFibGUiLCJ0eXBlIjoiY29uc3RydWN0b3IifSx7ImFub255bW91cyI6ZmFsc2UsImlucHV0cyI6W3siaW5kZXhlZCI6dHJ1ZSwiaW50ZXJuYWxUeXBlIjoiYWRkcmVzcyIsIm5hbWUiOiJvd25lciIsInR5cGUiOiJhZGRyZXNzIn0seyJpbmRleGVkIjp0cnVlLCJpbnRlcm5hbFR5cGUiOiJhZGRyZXNzIiwibmFtZSI6InNwZW5kZXIiLCJ0eXBlIjoiYWRkcmVzcyJ9LHsiaW5kZXhlZCI6ZmFsc2UsImludGVybmFsVHlwZSI6InVpbnQyNTYiLCJuYW1lIjoidmFsdWUiLCJ0eXBlIjoidWludDI1NiJ9XSwibmFtZSI6IkFwcHJvdmFsIiwidHlwZSI6ImV2ZW50In0seyJhbm9ueW1vdXMiOmZhbHNlLCJpbnB1dHMiOlt7ImluZGV4ZWQiOnRydWUsImludGVybmFsVHlwZSI6ImFkZHJlc3MiLCJuYW1lIjoicHJldmlvdXNPd25lciIsInR5cGUiOiJhZGRyZXNzIn0seyJpbmRleGVkIjp0cnVlLCJpbnRlcm5hbFR5cGUiOiJhZGRyZXNzIiwibmFtZSI6Im5ld093bmVyIiwidHlwZSI6ImFkZHJlc3MifV0sIm5hbWUiOiJPd25lcnNoaXBUcmFuc2ZlcnJlZCIsInR5cGUiOiJldmVudCJ9LHsiYW5vbnltb3VzIjpmYWxzZSwiaW5wdXRzIjpbeyJpbmRleGVkIjp0cnVlLCJpbnRlcm5hbFR5cGUiOiJhZGRyZXNzIiwibmFtZSI6ImZyb20iLCJ0eXBlIjoiYWRkcmVzcyJ9LHsiaW5kZXhlZCI6dHJ1ZSwiaW50ZXJuYWxUeXBlIjoiYWRkcmVzcyIsIm5hbWUiOiJ0byIsInR5cGUiOiJhZGRyZXNzIn0seyJpbmRleGVkIjpmYWxzZSwiaW50ZXJuYWxUeXBlIjoidWludDI1NiIsIm5hbWUiOiJ2YWx1ZSIsInR5cGUiOiJ1aW50MjU2In1dLCJuYW1lIjoiVHJhbnNmZXIiLCJ0eXBlIjoiZXZlbnQifSx7ImNvbnN0YW50Ijp0cnVlLCJpbnB1dHMiOlt7ImludGVybmFsVHlwZSI6ImFkZHJlc3MiLCJuYW1lIjoib3duZXIiLCJ0eXBlIjoiYWRkcmVzcyJ9LHsiaW50ZXJuYWxUeXBlIjoiYWRkcmVzcyIsIm5hbWUiOiJzcGVuZGVyIiwidHlwZSI6ImFkZHJlc3MifV0sIm5hbWUiOiJhbGxvd2FuY2UiLCJvdXRwdXRzIjpbeyJpbnRlcm5hbFR5cGUiOiJ1aW50MjU2IiwibmFtZSI6IiIsInR5cGUiOiJ1aW50MjU2In1dLCJwYXlhYmxlIjpmYWxzZSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyIsInR5cGUiOiJmdW5jdGlvbiJ9LHsiY29uc3RhbnQiOmZhbHNlLCJpbnB1dHMiOlt7ImludGVybmFsVHlwZSI6ImFkZHJlc3MiLCJuYW1lIjoic3BlbmRlciIsInR5cGUiOiJhZGRyZXNzIn0seyJpbnRlcm5hbFR5cGUiOiJ1aW50MjU2IiwibmFtZSI6ImFtb3VudCIsInR5cGUiOiJ1aW50MjU2In1dLCJuYW1lIjoiYXBwcm92ZSIsIm91dHB1dHMiOlt7ImludGVybmFsVHlwZSI6ImJvb2wiLCJuYW1lIjoiIiwidHlwZSI6ImJvb2wifV0sInBheWFibGUiOmZhbHNlLCJzdGF0ZU11dGFiaWxpdHkiOiJub25wYXlhYmxlIiwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6dHJ1ZSwiaW5wdXRzIjpbeyJpbnRlcm5hbFR5cGUiOiJhZGRyZXNzIiwibmFtZSI6ImFjY291bnQiLCJ0eXBlIjoiYWRkcmVzcyJ9XSwibmFtZSI6ImJhbGFuY2VPZiIsIm91dHB1dHMiOlt7ImludGVybmFsVHlwZSI6InVpbnQyNTYiLCJuYW1lIjoiIiwidHlwZSI6InVpbnQyNTYifV0sInBheWFibGUiOmZhbHNlLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3IiwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6dHJ1ZSwiaW5wdXRzIjpbXSwibmFtZSI6ImRlY2ltYWxzIiwib3V0cHV0cyI6W3siaW50ZXJuYWxUeXBlIjoidWludDgiLCJuYW1lIjoiIiwidHlwZSI6InVpbnQ4In1dLCJwYXlhYmxlIjpmYWxzZSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyIsInR5cGUiOiJmdW5jdGlvbiJ9LHsiY29uc3RhbnQiOmZhbHNlLCJpbnB1dHMiOlt7ImludGVybmFsVHlwZSI6ImFkZHJlc3MiLCJuYW1lIjoic3BlbmRlciIsInR5cGUiOiJhZGRyZXNzIn0seyJpbnRlcm5hbFR5cGUiOiJ1aW50MjU2IiwibmFtZSI6InN1YnRyYWN0ZWRWYWx1ZSIsInR5cGUiOiJ1aW50MjU2In1dLCJuYW1lIjoiZGVjcmVhc2VBbGxvd2FuY2UiLCJvdXRwdXRzIjpbeyJpbnRlcm5hbFR5cGUiOiJib29sIiwibmFtZSI6IiIsInR5cGUiOiJib29sIn1dLCJwYXlhYmxlIjpmYWxzZSwic3RhdGVNdXRhYmlsaXR5Ijoibm9ucGF5YWJsZSIsInR5cGUiOiJmdW5jdGlvbiJ9LHsiY29uc3RhbnQiOnRydWUsImlucHV0cyI6W10sIm5hbWUiOiJnZXRPd25lciIsIm91dHB1dHMiOlt7ImludGVybmFsVHlwZSI6ImFkZHJlc3MiLCJuYW1lIjoiIiwidHlwZSI6ImFkZHJlc3MifV0sInBheWFibGUiOmZhbHNlLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3IiwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6ZmFsc2UsImlucHV0cyI6W3siaW50ZXJuYWxUeXBlIjoiYWRkcmVzcyIsIm5hbWUiOiJzcGVuZGVyIiwidHlwZSI6ImFkZHJlc3MifSx7ImludGVybmFsVHlwZSI6InVpbnQyNTYiLCJuYW1lIjoiYWRkZWRWYWx1ZSIsInR5cGUiOiJ1aW50MjU2In1dLCJuYW1lIjoiaW5jcmVhc2VBbGxvd2FuY2UiLCJvdXRwdXRzIjpbeyJpbnRlcm5hbFR5cGUiOiJib29sIiwibmFtZSI6IiIsInR5cGUiOiJib29sIn1dLCJwYXlhYmxlIjpmYWxzZSwic3RhdGVNdXRhYmlsaXR5Ijoibm9ucGF5YWJsZSIsInR5cGUiOiJmdW5jdGlvbiJ9LHsiY29uc3RhbnQiOmZhbHNlLCJpbnB1dHMiOlt7ImludGVybmFsVHlwZSI6InVpbnQyNTYiLCJuYW1lIjoiYW1vdW50IiwidHlwZSI6InVpbnQyNTYifV0sIm5hbWUiOiJtaW50Iiwib3V0cHV0cyI6W3siaW50ZXJuYWxUeXBlIjoiYm9vbCIsIm5hbWUiOiIiLCJ0eXBlIjoiYm9vbCJ9XSwicGF5YWJsZSI6ZmFsc2UsInN0YXRlTXV0YWJpbGl0eSI6Im5vbnBheWFibGUiLCJ0eXBlIjoiZnVuY3Rpb24ifSx7ImNvbnN0YW50Ijp0cnVlLCJpbnB1dHMiOltdLCJuYW1lIjoibmFtZSIsIm91dHB1dHMiOlt7ImludGVybmFsVHlwZSI6InN0cmluZyIsIm5hbWUiOiIiLCJ0eXBlIjoic3RyaW5nIn1dLCJwYXlhYmxlIjpmYWxzZSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyIsInR5cGUiOiJmdW5jdGlvbiJ9LHsiY29uc3RhbnQiOnRydWUsImlucHV0cyI6W10sIm5hbWUiOiJvd25lciIsIm91dHB1dHMiOlt7ImludGVybmFsVHlwZSI6ImFkZHJlc3MiLCJuYW1lIjoiIiwidHlwZSI6ImFkZHJlc3MifV0sInBheWFibGUiOmZhbHNlLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3IiwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6ZmFsc2UsImlucHV0cyI6W10sIm5hbWUiOiJyZW5vdW5jZU93bmVyc2hpcCIsIm91dHB1dHMiOltdLCJwYXlhYmxlIjpmYWxzZSwic3RhdGVNdXRhYmlsaXR5Ijoibm9ucGF5YWJsZSIsInR5cGUiOiJmdW5jdGlvbiJ9LHsiY29uc3RhbnQiOnRydWUsImlucHV0cyI6W10sIm5hbWUiOiJzeW1ib2wiLCJvdXRwdXRzIjpbeyJpbnRlcm5hbFR5cGUiOiJzdHJpbmciLCJuYW1lIjoiIiwidHlwZSI6InN0cmluZyJ9XSwicGF5YWJsZSI6ZmFsc2UsInN0YXRlTXV0YWJpbGl0eSI6InZpZXciLCJ0eXBlIjoiZnVuY3Rpb24ifSx7ImNvbnN0YW50Ijp0cnVlLCJpbnB1dHMiOltdLCJuYW1lIjoidG90YWxTdXBwbHkiLCJvdXRwdXRzIjpbeyJpbnRlcm5hbFR5cGUiOiJ1aW50MjU2IiwibmFtZSI6IiIsInR5cGUiOiJ1aW50MjU2In1dLCJwYXlhYmxlIjpmYWxzZSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyIsInR5cGUiOiJmdW5jdGlvbiJ9LHsiY29uc3RhbnQiOmZhbHNlLCJpbnB1dHMiOlt7ImludGVybmFsVHlwZSI6ImFkZHJlc3MiLCJuYW1lIjoicmVjaXBpZW50IiwidHlwZSI6ImFkZHJlc3MifSx7ImludGVybmFsVHlwZSI6InVpbnQyNTYiLCJuYW1lIjoiYW1vdW50IiwidHlwZSI6InVpbnQyNTYifV0sIm5hbWUiOiJ0cmFuc2ZlciIsIm91dHB1dHMiOlt7ImludGVybmFsVHlwZSI6ImJvb2wiLCJuYW1lIjoiIiwidHlwZSI6ImJvb2wifV0sInBheWFibGUiOmZhbHNlLCJzdGF0ZU11dGFiaWxpdHkiOiJub25wYXlhYmxlIiwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6ZmFsc2UsImlucHV0cyI6W3siaW50ZXJuYWxUeXBlIjoiYWRkcmVzcyIsIm5hbWUiOiJzZW5kZXIiLCJ0eXBlIjoiYWRkcmVzcyJ9LHsiaW50ZXJuYWxUeXBlIjoiYWRkcmVzcyIsIm5hbWUiOiJyZWNpcGllbnQiLCJ0eXBlIjoiYWRkcmVzcyJ9LHsiaW50ZXJuYWxUeXBlIjoidWludDI1NiIsIm5hbWUiOiJhbW91bnQiLCJ0eXBlIjoidWludDI1NiJ9XSwibmFtZSI6InRyYW5zZmVyRnJvbSIsIm91dHB1dHMiOlt7ImludGVybmFsVHlwZSI6ImJvb2wiLCJuYW1lIjoiIiwidHlwZSI6ImJvb2wifV0sInBheWFibGUiOmZhbHNlLCJzdGF0ZU11dGFiaWxpdHkiOiJub25wYXlhYmxlIiwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6ZmFsc2UsImlucHV0cyI6W3siaW50ZXJuYWxUeXBlIjoiYWRkcmVzcyIsIm5hbWUiOiJuZXdPd25lciIsInR5cGUiOiJhZGRyZXNzIn1dLCJuYW1lIjoidHJhbnNmZXJPd25lcnNoaXAiLCJvdXRwdXRzIjpbXSwicGF5YWJsZSI6ZmFsc2UsInN0YXRlTXV0YWJpbGl0eSI6Im5vbnBheWFibGUiLCJ0eXBlIjoiZnVuY3Rpb24ifV0NCg=='
 , diccionario:['raise'
 ,'geese'
 ,'crayon'
 ,'delight'
 ,'silky'
 ,'admire'
 ,'beam'
 ,'chalk'
 ,'attraction'
 ,'reward'
 ,'plate'
 ,'curve'
 ,'cultured'
 ,'afraid'
 ,'sand'
 ,'attack'
 ,'friction'
 ,'vacation'
 ,'terrific'
 ,'remarkable'
 ,'comfortable'
 ,'bubble'
 ,'wistful'
 ,'melted'
 ,'spiky'
 ,'lively'
 ,'dusty'
 ,'unsightly'
 ,'note'
 ,'frogs'
 ,'suck'
 ,'soap'
 ,'demonic'
 ,'cats'
 ,'hesitant'
 ,'glow'
 ,'arrogant'
 ,'abusive'
 ,'majestic'
 ,'three'
 ,'turn'
 ,'tomatoes'
 ,'boundless'
 ,'nosy'
 ,'shocking'
 ,'fog'
 ,'periodic'
 ,'root'
 ,'acoustic'
 ,'kiss'
 ,'equal'
 ,'cute'
 ,'arch'
 ,'unit'
 ,'verse'
 ,'donkey'
 ,'business'
 ,'lick'
 ,'capable'
 ,'lettuce'
 ,'oafish'
 ,'chubby'
 ,'sturdy'
 ,'toad'
 ,'tire'
 ,'morning'
 ,'empty'
 ,'breathe'
 ,'zonked'
 ,'second-hand'
 ,'complain'
 ,'rest'
 ,'fool'
 ,'collar'
 ,'society'
 ,'shelf'
 ,'cherry'
 ,'tour'
 ,'immense'
 ,'lovely'
 ,'telling'
 ,'observation'
 ,'enter'
 ,'capricious'
 ,'medical'
 ,'queue'
 ,'release'
 ,'humor'
 ,'cart'
 ,'husky'
 ,'show'
 ,'frail'
 ,'stream'
 ,'language'
 ,'wine'
 ,'humdrum'
 ,'rude'
 ,'rat'
 ,'bounce'
 ,'stereotyped'
 ,'sable'
 ,'discovery'
 ,'steadfast'
 ,'water'
 ,'learn'
 ,'flowery'
 ,'superb'
 ,'joyous'
 ,'thirsty'
 ,'appreciate'
 ,'excite'
 ,'smoggy'
 ,'shrill'
 ,'beg'
 ,'deadpan'
 ,'press'
 ,'high'
 ,'continue'
 ,'obeisant'
 ,'drag'
 ,'lacking'
 ,'profuse'
 ,'elderly'
 ,'calm'
 ,'cars'
 ,'violent'
 ,'rock'
 ,'brass'
 ,'womanly'
 ,'cracker'
 ,'winter'
 ,'crook'
 ,'dad'
 ,'hole'
 ,'condition'
 ,'x-ray'
 ,'flat'
 ,'erect'
 ,'tawdry'
 ,'terrify'
 ,'better'
 ,'dust'
 ,'handsomely'
 ,'ahead'
 ,'neighborly'
 ,'star'
 ,'stupendous'
 ,'aunt'
 ,'bikes'
 ,'creature'
 ,'need'
 ,'gamy'
 ,'cooing'
 ,'suggestion'
 ,'camera'
 ,'claim'
 ,'dear'
 ,'skate'
 ,'long-term'
 ,'rhetorical'
 ,'room'
 ,'soda'
 ,'tie'
 ,'physical'
 ,'foolish'
 ,'rail'
 ,'birds'
 ,'brave'
 ,'tough'
 ,'familiar'
 ,'soup'
 ,'slap'
 ,'cub'
 ,'abaft'
 ,'float'
 ,'alive'
 ,'town'
 ,'nest'
 ,'peck'
 ,'mourn'
 ,'sprout'
 ,'flowers'
 ,'rice'
 ,'toe'
 ,'income'
 ,'wilderness'
 ,'corn'
 ,'clap'
 ,'cold'
 ,'burly'
 ,'doubt'
 ,'knock'
 ,'whistle'
 ,'frame'
 ,'fine'
 ,'gleaming'
 ,'striped'
 ,'substantial'
 ,'flash'
 ,'groan'
 ,'efficacious'
 ,'vanish'
 ,'warm'
 ,'alleged'
 ,'excellent'
 ,'limit'
 ,'shoe'
 ,'honey'
 ,'abortive'
 ,'ticket'
 ,'shaggy'
 ,'cows'
 ,'lonely'
 ,'superficial'
 ,'fanatical'
 ,'chess'
 ,'son'
 ,'account'
 ,'sophisticated'
 ,'thankful'
 ,'nervous'
 ,'sense'
 ,'questionable'
 ,'heady'
 ,'cover'
 ,'legal'
 ,'beautiful'
 ,'double'
 ,'irritate'
 ,'vessel'
 ,'nebulous'
 ,'throne'
 ,'plucky'
 ,'frightening'
 ,'zebra'
 ,'education'
 ,'search'
 ,'year'
 ,'zinc'
 ,'lopsided'
 ,'gifted'
 ,'coherent'
 ,'want'
 ,'sail'
 ,'pan'
 ,'plot'
 ,'moaning'
 ,'aspiring'
 ,'old'
 ,'venomous'
 ,'preserve'
 ,'nostalgic'
 ,'hum'
 ,'abject'
 ,'anger'
 ,'walk'
 ,'communicate'
 ,'vulgar'
 ,'river'
 ,'picture'
 ,'fang'
 ,'promise'
 ,'roof'
 ,'clear'
 ,'deranged'
 ,'trite'
 ,'ludicrous'
 ,'aquatic'
 ,'juice'
 ,'pocket'
 ,'snatch'
 ,'ink'
 ,'unnatural'
 ,'floor'
 ,'bead'
 ,'cluttered'
 ,'found'
 ,'tumble'
 ,'cheer'
 ,'crowded'
 ,'station'
 ,'scold'
 ,'silver'
 ,'addicted'
 ,'expensive'
 ,'deer'
 ,'fill'
 ,'itch'
 ,'ajar'
 ,'bloody'
 ,'ocean'
 ,'ski'
 ,'extend'
 ,'wise'
 ,'overflow'
 ,'buzz'
 ,'word'
 ,'instrument'
 ,'coast'
 ,'stiff'
 ,'slimy'
 ,'zephyr'
 ,'laborer'
 ,'laughable'
 ,'melodic'
 ,'hungry'
 ,'woebegone'
 ,'string'
 ,'concerned'
 ,'yard'
 ,'spiritual'
 ,'cemetery'
 ,'bolt'
 ,'belong'
 ,'deserve'
 ,'snakes'
 ,'whip'
 ,'delicate'
 ,'poke'
 ,'tooth'
 ,'confuse'
 ,'dirty'
 ,'jittery'
 ,'left'
 ,'glossy'
 ,'soft'
 ,'suspect'
 ,'bridge'
 ,'yielding'
 ,'poised'
 ,'scale'
 ,'quack'
 ,'quince'
 ,'observe'
 ,'scarecrow'
 ,'whispering'
 ,'flimsy'
 ,'shiny'
 ,'mist'
 ,'obsolete'
 ,'debonair'
 ,'female'
 ,'tank'
 ,'retire'
 ,'dramatic'
 ,'analyze'
 ,'rich'
 ,'laugh'
 ,'bulb'
 ,'trail'
 ,'diligent'
 ,'sincere'
 ,'respect'
 ,'territory'
 ,'receipt'
 ,'tight'
 ,'squeamish'
 ,'purple'
 ,'load'
 ,'advertisement'
 ,'loaf'
 ,'window'
 ,'torpid'
 ,'spark'
 ,'bad'
 ,'rhythm'
 ,'foamy'
 ,'stocking'
 ,'welcome'
 ,'miniature'
 ,'attach'
 ,'thunder'
 ,'guttural'
 ,'dispensable'
 ,'realize'
 ,'lavish'
 ,'keen'
 ,'thread'
 ,'scrub'
 ,'cellar'
 ,'farm'
 ,'exchange'
 ,'known'
 ,'earthy'
 ,'damaged'
 ,'contain'
 ,'quixotic'
 ,'exotic'
 ,'able'
 ,'creepy'
 ,'absorbed'
 ,'acid'
 ,'decorate'
 ,'irate'
 ,'magical'
 ,'bless'
 ,'dance'
 ,'cuddly'
 ,'hushed'
 ,'odd'
 ,'milky'
 ,'hour'
 ,'mammoth'
 ,'thumb'
 ,'little'
 ,'defeated'
 ,'delicious'
 ,'lame'
 ,'kitty'
 ,'liquid'
 ,'measure'
 ,'cat'
 ,'open'
 ,'quick'
 ,'uneven'
 ,'tease'
 ,'form'
 ,'pets'
 ,'waiting'
 ,'natural'
 ,'minor'
 ,'complete'
 ,'staking'
 ,'glib'
 ,'aberrant'
 ,'wholesale'
 ,'bushes'
 ,'bashful'
 ,'elfin'
 ,'wrong'
 ,'cap'
 ,'careless'
 ,'brother'
 ,'pumped'
 ,'worried'
 ,'blind'
 ,'toothsome'
 ,'miscreant'
 ,'basket'
 ,'nation'
 ,'full'
 ,'bedroom'
 ,'agonizing'
 ,'intend'
 ,'reading'
 ,'distribution'
 ,'trains'
 ,'first'
 ,'correct'
 ,'clumsy'
 ,'face'
 ,'record'
 ,'whimsical'
 ,'absent'
 ,'home'
 ,'gaping'
 ,'cake'
 ,'excuse'
 ,'momentous'
 ,'church'
 ,'handy'
 ,'place'
 ,'cumbersome'
 ,'deeply'
 ,'wide'
 ,'head'
 ,'theory'
 ,'amusing'
 ,'ceaseless'
 ,'quaint'
 ,'authority'
 ,'advice'
 ,'scatter'
 ,'volatile'
 ,'proud'
 ,'tremendous'
 ,'hill'
 ,'fear'
 ,'hallowed'
 ,'stamp'
 ,'flavor'
 ,'accidental'
 ,'like'
 ,'measly'
 ,'day'
 ,'threatening'
 ,'parched'
 ,'flesh'
 ,'attract'
 ,'supply'
 ,'phone'
 ,'accurate'
 ,'doubtful'
 ,'toothpaste'
 ,'compete'
 ,'change'
 ,'wasteful'
 ,'leg'
 ,'power'
 ,'tail'
 ,'ill'
 ,'offbeat'
 ,'vast'
 ,'class'
 ,'caption'
 ,'lean'
 ,'hose'
 ,'development'
 ,'living'
 ,'awful'
 ,'ruddy'
 ,'common'
 ,'nonstop'
 ,'soothe'
 ,'sordid'
 ,'decay'
 ,'tart'
 ,'hand'
 ,'purring'
 ,'combative'
 ,'fluttering'
 ,'fade'
 ,'run'
 ,'include'
 ,'faint'
 ,'pleasure'
 ,'abashed'
 ,'pencil'
 ,'truculent'
 ,'fireman'
 ,'dime'
 ,'languid'
 ,'scribble'
 ,'abrasive'
 ,'girls'
 ,'loud'
 ,'fax'
 ,'smiling'
 ,'sweltering'
 ,'wanting'
 ,'license'
 ,'pet'
 ,'awake'
 ,'strong'
 ,'shirt'
 ,'public'
 ,'witty'
 ,'educate'
 ,'extra-small'
 ,'notice'
 ,'tickle'
 ,'amused'
 ,'spell'
 ,'letters'
 ,'stone'
 ,'shape'
 ,'fasten'
 ,'discussion'
 ,'wound'
 ,'recondite'
 ,'develop'
 ,'unequaled'
 ,'sip'
 ,'boundary'
 ,'event'
 ,'discreet'
 ,'nonchalant'
 ,'hook'
 ,'halting'
 ,'escape'
 ,'grain'
 ,'spill'
 ,'pie'
 ,'call'
 ,'hunt'
 ,'romantic'
 ,'melt'
 ,'clever'
 ,'brawny'
 ,'dinner'
 ,'lock'
 ,'shut'
 ,'start'
 ,'mess up'
 ,'nerve'
 ,'bite-sized'
 ,'spectacular'
 ,'unknown'
 ,'bow'
 ,'avoid'
 ,'company'
 ,'mute'
 ,'low'
 ,'end'
 ,'pail'
 ,'makeshift'
 ,'tendency'
 ,'arithmetic'
 ,'animated'
 ,'fumbling'
 ,'wing'
 ,'paddle'
 ,'succeed'
 ,'incredible'
 ,'jar'
 ,'bury'
 ,'friends'
 ,'fuel'
 ,'homeless'
 ,'nifty'
 ,'peaceful'
 ,'planes'
 ,'meat'
 ,'kettle'
 ,'greedy'
 ,'pretend'
 ,'ray'
 ,'scary'
 ,'two'
 ,'identify'
 ,'disapprove'
 ,'potato'
 ,'wind'
 ,'defective'
 ,'march'
 ,'credit'
 ,'five'
 ,'relation'
 ,'aftermath'
 ,'suit'
 ,'normal'
 ,'fresh'
 ,'sofa'
 ,'waves'
 ,'changeable'
 ,'fluffy'
 ,'nose'
 ,'pack'
 ,'weak'
 ,'inform'
 ,'grateful'
 ,'coach'
 ,'arm'
 ,'action'
 ,'future'
 ,'please'
 ,'button'
 ,'honorable'
 ,'entertain'
 ,'carve'
 ,'judge'
 ,'underwear'
 ,'grieving'
 ,'flashy'
 ,'wriggle'
 ,'noiseless'
 ,'disturbed'
 ,'weight'
 ,'assorted'
 ,'rose'
 ,'purpose'
 ,'instruct'
 ,'gratis'
 ,'smart'
 ,'furniture'
 ,'godly'
 ,'itchy'
 ,'peace'
 ,'penitent'
 ,'mellow'
 ,'heavenly'
 ,'shock'
 ,'screeching'
 ,'experience'
 ,'story'
 ,'steer'
 ,'boiling'
 ,'summer'
 ,'yellow'
 ,'glass'
 ,'six'
 ,'flower'
 ,'match'
 ,'necessary'
 ,'windy'
 ,'wax'
 ,'coat'
 ,'calculate'
 ,'symptomatic'
 ,'seat'
 ,'magenta'
 ,'compare'
 ,'elite'
 ,'mature'
 ,'furtive'
 ,'hollow'
 ,'hammer'
 ,'dangerous'
 ,'ladybug'
 ,'bit'
 ,'holiday'
 ,'grip'
 ,'harmonious'
 ,'post'
 ,'amount'
 ,'numerous'
 ,'meal'
 ,'deceive'
 ,'house'
 ,'fragile'
 ,'lunch'
 ,'placid'
 ,'sweater'
 ,'ghost'
 ,'utter'
 ,'pick'
 ,'vacuous'
 ,'effect'
 ,'merciful'
 ,'frog'
 ,'visitor'
 ,'whole'
 ,'sack'
 ,'loving'
 ,'step'
 ,'object'
 ,'incandescent'
 ,'elated'
 ,'small'
 ,'spoon'
 ,'possessive'
 ,'glistening'
 ,'boot'
 ,'synonymous'
 ,'peel'
 ,'political'
 ,'transport'
 ,'humorous'
 ,'broken'
 ,'flag'
 ,'warn'
 ,'thoughtless'
 ,'wish'
 ,'skinny'
 ,'naive'
 ,'owe'
 ,'snore'
 ,'gullible'
 ,'annoyed'
 ,'expansion'
 ,'box'
 ,'swim'
 ,'ashamed'
 ,'grab'
 ,'disagreeable'
 ,'stitch'
 ,'tacit'
 ,'crate'
 ,'label'
 ,'surprise'
 ,'self'
 ,'faded'
 ,'park'
 ,'opposite'
 ,'far'
 ,'quicksand'
 ,'zany'
 ,'evasive'
 ,'volleyball'
 ,'untidy'
 ,'abstracted'
 ,'design'
 ,'unbiased'
 ,'desire'
 ,'blade'
 ,'veil'
 ,'plan'
 ,'boorish'
 ,'saw'
 ,'drunk'
 ,'unpack'
 ,'woozy'
 ,'consider'
 ,'lackadaisical'
 ,'testy'
 ,'colossal'
 ,'harbor'
 ,'blink'
 ,'tax'
 ,'stage'
 ,'madly'
 ,'stuff'
 ,'labored'
 ,'moon'
 ,'aboard'
 ,'time'
 ,'field'
 ,'grandfather'
 ,'ragged'
 ,'innocent'
 ,'cheap'
 ,'interest'
 ,'tow'
 ,'vivacious'
 ,'overjoyed'
 ,'obtain'
 ,'sad'
 ,'angry'
 ,'flippant'
 ,'food'
 ,'average'
 ,'fallacious'
 ,'inexpensive'
 ,'sweet'
 ,'queen'
 ,'canvas'
 ,'size'
 ,'visit'
 ,'unequal'
 ,'pies'
 ,'representative'
 ,'ducks'
 ,'copy'
 ,'lyrical'
 ,'coal'
 ,'ablaze'
 ,'scare'
 ,'bite'
 ,'grape'
 ,'haunt'
 ,'man'
 ,'tan'
 ,'outgoing'
 ,'wandering'
 ,'careful'
 ,'scarce'
 ,'fold'
 ,'mixed'
 ,'writing'
 ,'scrape'
 ,'grumpy'
 ,'dinosaurs'
 ,'young'
 ,'lucky'
 ,'appliance'
 ,'vase'
 ,'confess'
 ,'radiate'
 ,'illustrious'
 ,'acidic'
 ,'pine'
 ,'prose'
 ,'pear'
 ,'wacky'
 ,'cruel'
 ,'dare'
 ,'perform'
 ,'stranger'
 ,'devilish'
 ,'happen'
 ,'stormy'
 ,'scattered'
 ,'sleep'
 ,'crooked'
 ,'plain'
 ,'sharp'
 ,'plant'
 ,'battle'
 ,'psychedelic'
 ,'dull'
 ,'seal'
 ,'apparatus'
 ,'oatmeal'
 ,'guarantee'
 ,'stale'
 ,'crazy'
 ,'relieved'
 ,'price'
 ,'sticky'
 ,'memorize'
 ,'therapeutic'
 ,'filthy'
 ,'difficult'
 ,'range'
 ,'jobless'
 ,'mark'
 ,'cynical'
 ,'film'
 ,'wonderful'
 ,'bare'
 ,'government'
 ,'nondescript'
 ,'enchanted'
 ,'fortunate'
 ,'trousers'
 ,'grouchy'
 ,'spring'
 ,'relax'
 ,'cool'
 ,'deserted'
 ,'decision'
 ,'watch'
 ,'rambunctious'
 ,'jail'
 ,'reflective'
 ,'reflect'
 ,'ossified'
 ,'high-pitched'
 ,'subdued'
 ,'expand'
 ,'aloof'
 ,'glue'
 ,'prefer'
 ,'carpenter'
 ,'applaud'
 ,'ruthless'
 ,'enormous'
 ,'yarn'
 ,'stare'
 ,'angle'
 ,'secretive'
 ,'crabby'
 ,'trip'
 ,'cycle'
 ,'elastic'
 ,'needle'
 ,'rainstorm'
 ,'kaput'
 ,'good'
 ,'pig'
 ,'possess'
 ,'annoying'
 ,'tempt'
 ,'produce'
 ,'wary'
 ,'imaginary'
 ,'smile'
 ,'lumpy'
 ,'decisive'
 ,'salty'
 ,'sticks'
 ,'tick'
 ,'gold'
 ,'righteous'
 ,'annoy'
 ,'fierce'
 ,'male'
 ,'ambitious'
 ,'painful'
 ,'mushy'
 ,'cannon'
 ,'homely'
 ,'forgetful'
 ,'well-off'
 ,'women'
 ,'literate'
 ,'horse'
 ,'spot'
 ,'sheep'
 ,'crush'
 ,'trouble'
 ,'desert'
 ,'scene'
 ,'drink'
 ,'glorious'
 ,'hideous'
 ,'doll'
 ,'wink'
 ,'tent'
 ,'twig'
 ,'reason'
 ,'divergent'
 ,'illegal'
 ,'kill'
 ,'grade'
 ,'roomy'
 ,'serious'
 ,'airport'
 ,'afford'
 ,'cattle'
 ,'refuse'
 ,'embarrass'
 ,'dapper'
 ,'right'
 ,'suspend'
 ,'overt'
 ,'industry'
 ,'nappy'
 ,'bewildered'
 ,'groovy'
 ,'sparkling'
 ,'shallow'
 ,'uptight'
 ,'obedient'
 ,'weigh'
 ,'moldy'
 ,'parsimonious'
 ,'dysfunctional'
 ,'behave'
 ,'tedious'
 ,'barbarous'
 ,'group'
 ,'fancy'
 ,'bone'
 ,'simple'
 ,'reproduce'
 ,'ear'
 ,'ice'
 ,'salt'
 ,'cherries'
 ,'jump'
 ,'callous'
 ,'birth'
 ,'wiggly'
 ,'dam'
 ,'announce'
 ,'trot'
 ,'argue'
 ,'alike'
 ,'available'
 ,'invincible'
 ,'adventurous'
 ,'seemly'
 ,'example'
 ,'houses'
 ,'mitten'
 ,'educated'
 ,'tray'
 ,'believe'
 ,'decorous'
 ,'zipper'
 ,'equable'
 ,'receptive'
 ,'boy'
 ,'vegetable'
 ,'pancake'
 ,'adjustment'
 ,'eatable'
 ,'delirious'
 ,'aback'
 ,'approval'
 ,'wooden'
 ,'eight'
 ,'live'
 ,'pray'
 ,'talk'
 ,'occur'
 ,'notebook'
 ,'peep'
 ,'mailbox'
 ,'sugar'
 ,'maid'
 ,'wrathful'
 ,'sin'
 ,'bleach'
 ,'guide'
 ,'knot'
 ,'pale'
 ,'exciting'
 ,'explode'
 ,'shivering'
 ,'beginner'
 ,'mug'
 ,'blush'
 ,'count'
 ,'soak'
 ,'towering'
 ,'enjoy'
 ,'boast'
 ,'expect'
 ,'hover'
 ,'nut'
 ,'drain'
 ,'marvelous'
 ,'muddled'
 ,'deep'
 ,'magnificent'
 ,'steel'
 ,'tangy'
 ,'plants'
 ,'meddle'
 ,'rings'
 ,'error'
 ,'launch'
 ,'manage'
 ,'disillusioned'
 ,'handsome'
 ,'feigned'
 ,'spooky'
 ,'guiltless'
 ,'guarded'
 ,'happy'
 ,'way'
 ,'vest'
 ,'cent'
 ,'teaching'
 ,'pigs'
 ,'offer'
 ,'cactus'
 ,'own'
 ,'afternoon'
 ,'switch'
 ,'monkey'
 ,'null'
 ,'request'
 ,'straw'
 ,'astonishing'
 ,'twist'
 ,'trucks'
 ,'dolls'
 ,'brief'
 ,'inquisitive'
 ,'overrated'
 ,'pink'
 ,'giraffe'
 ,'undesirable'
 ,'train'
 ,'skirt'
 ,'challenge'
 ,'preach'
 ,'wonder'
 ,'ruin'
 ,'play'
 ,'listen'
 ,'system'
 ,'snake'
 ,'vengeful'
 ,'unkempt'
 ,'whisper'
 ,'reach'
 ,'powder'
 ,'snails'
 ,'growth'
 ,'extra-large'
 ,'toothbrush'
 ,'cup'
 ,'lake'
 ,'taste'
 ,'spiders'
 ,'rescue'
 ,'parallel'
 ,'elbow'
 ,'dislike'
 ,'scream'
 ,'birthday'
 ,'bear'
 ,'hurried'
 ,'protest'
 ,'rob'
 ,'great'
 ,'creator'
 ,'rapid'
 ,'hard-to-find'
 ,'multiply'
 ,'dashing'
 ,'luxuriant'
 ,'holistic'
 ,'aware'
 ,'waste'
 ,'boring'
 ,'feeble'
 ,'numberless'
 ,'various'
 ,'berry'
 ,'tenuous'
 ,'puncture'
 ,'mine'
 ,'dizzy'
 ,'mass'
 ,'remind'
 ,'risk'
 ,'market'
 ,'unhealthy'
 ,'lamp'
 ,'panoramic'
 ,'chop'
 ,'curved'
 ,'sloppy'
 ,'pathetic'
 ,'white'
 ,'wheel'
 ,'library'
 ,'scissors'
 ,'admit'
 ,'cabbage'
 ,'polish'
 ,'ad hoc'
 ,'puffy'
 ,'ugly'
 ,'half'
 ,'gigantic'
 ,'store'
 ,'mom'
 ,'lumber'
 ,'encouraging'
 ,'repulsive'
 ,'fuzzy'
 ,'obey'
 ,'macho'
 ,'strap'
 ,'statement'
 ,'auspicious'
 ,'general'
 ,'hypnotic'
 ,'handle'
 ,'skin'
 ,'tug'
 ,'zealous'
 ,'waggish'
 ,'noise'
 ,'meeting'
 ,'harsh'
 ,'try'
 ,'second'
 ,'lewd'
 ,'lighten'
 ,'carriage'
 ,'railway'
 ,'jog'
 ,'idea'
 ,'pretty'
 ,'whirl'
 ,'drum'
 ,'delightful'
 ,'massive'
 ,'unruly'
 ,'charge'
 ,'regret'
 ,'wealthy'
 ,'sniff'
 ,'sleet'
 ,'volcano'
 ,'balance'
 ,'arrest'
 ,'brush'
 ,'bizarre'
 ,'limping'
 ,'chunky'
 ,'number'
 ,'mundane'
 ,'land'
 ,'dress'
 ,'brash'
 ,'decide'
 ,'elegant'
 ,'crowd'
 ,'rotten'
 ,'outstanding'
 ,'sleepy'
 ,'irritating'
 ,'tested'
 ,'smelly'
 ,'tranquil'
 ,'deafening'
 ,'grandiose'
 ,'efficient'
 ,'curvy'
 ,'broad'
 ,'straight'
 ,'wrap'
 ,'pastoral'
 ,'sudden'
 ,'eyes'
 ,'agreement'
 ,'exclusive'
 ,'futuristic'
 ,'repair'
 ,'exultant'
 ,'frighten'
 ,'babies'
 ,'faithful'
 ,'tiny'
 ,'truthful'
 ,'chemical'
 ,'squalid'
 ,'fairies'
 ,'insurance'
 ,'sulky'
 ,'acrid'
 ,'disastrous'
 ,'sedate'
 ,'bee'
 ,'eggs'
 ,'warlike'
 ,'bait'
 ,'move'
 ,'ultra'
 ,'fly'
 ,'hate'
 ,'riddle'
 ,'boat'
 ,'overconfident'
 ,'cook'
 ,'stimulating'
 ,'key'
 ,'wild'
 ,'observant'
 ,'pour'
 ,'jumbled'
 ,'juggle'
 ,'children'
 ,'suffer'
 ,'gun'
 ,'tasty'
 ,'tongue'
 ,'imagine'
 ,'apparel'
 ,'sheet'
 ,'achiever'
 ,'earthquake'
 ,'hard'
 ,'injure'
 ,'ratty'
 ,'murder'
 ,'reminiscent'
 ,'question'
 ,'unadvised'
 ,'strengthen'
 ,'bomb'
 ,'maniacal'
 ,'ban'
 ,'stroke'
 ,'remain'
 ,'committee'
 ,'mint'
 ,'thoughtful'
 ,'hop'
 ,'huge'
 ,'quiet'
 ,'lush'
 ,'crow'
 ,'quartz'
 ,'moor'
 ,'bird'
 ,'muddle'
 ,'picayune'
 ,'lie'
 ,'long'
 ,'responsible'
 ,'imperfect'
 ,'frightened'
 ,'party'
 ,'strange'
 ,'punishment'
 ,'fertile'
 ,'copper'
 ,'satisfy'
 ,'horn'
 ,'billowy'
 ,'pushy'
 ,'adjoining'
 ,'recess'
 ,'mother'
 ,'embarrassed'
 ,'pickle'
 ,'expert'
 ,'plastic'
 ,'truck'
 ,'act'
 ,'rebel'
 ,'whine'
 ,'perpetual'
 ,'marry'
 ,'conscious'
 ,'partner'
 ,'black-and-white'
 ,'spray'
 ,'free'
 ,'bells'
 ,'apologise'
 ,'fetch'
 ,'fry'
 ,'jumpy'
 ,'rightful'
 ,'scared'
 ,'interfere'
 ,'snow'
 ,'fit'
 ,'squeeze'
 ,'wrench'
 ,'paper'
 ,'unwieldy'
 ,'detect'
 ,'same'
 ,'rejoice'
 ,'position'
 ,'wood'
 ,'kind'
 ,'hang'
 ,'delay'
 ,'trust'
 ,'alarm'
 ,'abnormal'
 ,'slow'
 ,'ignore'
 ,'tiger'
 ,'habitual'
 ,'cause'
 ,'endurable'
 ,'versed'
 ,'curious'
 ,'muscle'
 ,'understood'
 ,'blow'
 ,'men'
 ,'screw'
 ,'voice'
 ,'glove'
 ,'square'
 ,'panicky'
 ,'green'
 ,'gainful'
 ,'stay'
 ,'short'
 ,'race'
 ,'new'
 ,'door'
 ,'mighty'
 ,'quilt'
 ,'psychotic'
 ,'detail'
 ,'vigorous'
 ,'puzzling'
 ,'butter'
 ,'earsplitting'
 ,'bake'
 ,'mean'
 ,'selection'
 ,'learned'
 ,'fearless'
 ,'soggy'
 ,'hall'
 ,'wide-eyed'
 ,'color'
 ,'lying'
 ,'dirt'
 ,'branch'
 ,'stew'
 ,'longing'
 ,'tree'
 ,'introduce'
 ,'mice'
 ,'rely'
 ,'lunchroom'
 ,'cave'
 ,'dock'
 ,'bell'
 ,'ethereal'
 ,'bath'
 ,'craven'
 ,'spade'
 ,'obsequious'
 ,'grandmother'
 ,'freezing'
 ,'stop'
 ,'quirky'
 ,'smoke'
 ,'yummy'
 ,'past'
 ,'gaudy'
 ,'support'
 ,'serve'
 ,'worthless'
 ,'amuse'
 ,'coil'
 ,'reign'
 ,'jam'
 ,'resonant'
 ,'scent'
 ,'near'
 ,'vein'
 ,'cheat'
 ,'unaccountable'
 ,'structure'
 ,'current'
 ,'marble'
 ,'yawn'
 ,'skillful'
 ,'reject'
 ,'enthusiastic'
 ,'last'
 ,'historical'
 ,'fabulous'
 ,'materialistic'
 ,'magic'
 ,'afterthought'
 ,'fire'
 ,'silly'
 ,'befitting'
 ,'courageous'
 ,'useless'
 ,'driving'
 ,'brake'
 ,'flap'
 ,'plug'
 ,'umbrella'
 ,'ship'
 ,'motion'
 ,'prickly'
 ,'selfish'
 ,'ubiquitous'
 ,'distance'
 ,'divide'
 ,'foregoing'
 ,'ritzy'
 ,'pat'
 ,'adamant'
 ,'answer'
 ,'valuable'
 ,'ordinary'
 ,'program'
 ,'pull'
 ,'important'
 ,'drip'
 ,'puny'
 ,'follow'
 ,'cheese'
 ,'sock'
 ,'channel'
 ,'ball'
 ,'scarf'
 ,'voiceless'
 ,'profit'
 ,'help'
 ,'bored'
 ,'thick'
 ,'oven'
 ,'glamorous'
 ,'sink'
 ,'gather'
 ,'neck'
 ,'hospitable'
 ,'rhyme'
 ,'disarm'
 ,'uncle'
 ,'improve'
 ,'chivalrous'
 ,'furry'
 ,'hissing'
 ,'quickest'
 ,'pop'
 ,'shake'
 ,'quarrelsome'
 ,'pollution'
 ,'selective'
 ,'secret'
 ,'one'
 ,'passenger'
 ,'cobweb'
 ,'squeak'
 ,'scintillating'
 ,'yell'
 ,'circle'
 ,'sister'
 ,'can'
 ,'incompetent'
 ,'wry'
 ,'special'
 ,'direful'
 ,'mysterious'
 ,'temper'
 ,'explain'
 ,'energetic'
 ,'friend'
 ,'arrive'
 ,'different'
 ,'violet'
 ,'icy'
 ,'hobbies'
 ,'knit'
 ,'bumpy'
 ,'pest'
 ,'nice'
 ,'entertaining'
 ,'vagabond'
 ,'title'
 ,'egg'
 ,'outrageous'
 ,'punish'
 ,'upset'
 ,'precede'
 ,'guess'
 ,'cooperative'
 ,'hurt'
 ,'sore'
 ,'super'
 ,'pipe'
 ,'taboo'
 ,'joke'
 ,'crime'
 ,'back'
 ,'drop'
 ,'successful'
 ,'amazing'
 ,'tense'
 ,'flagrant'
 ,'check'
 ,'plantation'
 ,'quiver'
 ,'rule'
 ,'thundering'
 ,'wakeful'
 ,'abrupt'
 ,'adaptable'
 ,'drab'
 ,'lazy'
 ,'push'
 ,'hysterical'
 ,'cast'
 ,'innate'
 ,'pump'
 ,'shelter'
 ,'far-flung'
 ,'swanky'
 ,'spy'
 ,'ready'
 ,'fail'
 ,'letter'
 ,'harm'
 ,'trick'
 ,'table'
 ,'connection'
 ,'imminent'
 ,'cowardly'
 ,'basketball'
 ,'dark'
 ,'determined'
 ,'married'
 ,'early'
 ,'side'
 ,'hateful'
 ,'yam'
 ,'thaw'
 ,'gentle'
 ,'four'
 ,'value'
 ,'interrupt'
 ,'gabby'
 ,'plausible'
 ,'trashy'
 ,'stove'
 ,'gruesome'
 ,'trace'
 ,'alluring'
 ,'worm'
 ,'treatment'
 ,'prick'
 ,'knowledge'
 ,'surround'
 ,'grate'
 ,'crack'
 ,'undress'
 ,'useful'
 ,'slave'
 ,'front'
 ,'snobbish'
 ,'cut'
 ,'oval'
 ,'stretch'
 ,'health'
 ,'scientific'
 ,'gusty'
 ,'chin'
 ,'uttermost'
 ,'thought'
 ,'paint'
 ,'wave'
 ,'satisfying'
 ,'pen'
 ,'wet'
 ,'pleasant'
 ,'utopian'
 ,'heal'
 ,'clover'
 ,'false'
 ,'tramp'
 ,'highfalutin'
 ,'blot'
 ,'choke'
 ,'increase'
 ,'chickens'
 ,'inject'
 ,'jelly'
 ,'smell'
 ,'famous'
 ,'jeans'
 ,'fast'
 ,'giddy'
 ,'kittens'
 ,'writer'
 ,'omniscient'
 ,'sidewalk'
 ,'flame'
 ,'toes'
 ,'ask'
 ,'late'
 ,'direction'
 ,'puzzled'
 ,'colorful'
 ,'knife'
 ,'disgusting'
 ,'beds'
 ,'electric'
 ,'roll'
 ,'precious'
 ,'maddening'
 ,'jellyfish'
 ,'beef'
 ,'eager'
 ,'rainy'
 ,'unbecoming'
 ,'impolite'
 ,'war'
 ,'examine'
 ,'present'
 ,'tip'
 ,'charming'
 ,'spoil'
 ,'basin'
 ,'bawdy'
 ,'offend'
 ,'bathe'
 ,'military'
 ,'marked'
 ,'practice'
 ,'chicken'
 ,'reply'
 ,'list'
 ,'orange'
 ,'cow'
 ,'flock'
 ,'insidious'
 ,'lowly'
 ,'spotless'
 ,'skip'
 ,'page'
 ,'closed'
 ,'absurd'
 ,'governor'
 ,'silent'
 ,'uppity'
 ,'productive'
 ,'sea'
 ,'lamentable'
 ,'telephone'
 ,'tub'
 ,'hanging'
 ,'guitar'
 ,'linen'
 ,'slippery'
 ,'describe'
 ,'unable'
 ,'quizzical'
 ,'use'
 ,'tame'
 ,'true'
 ,'optimal'
 ,'workable'
 ,'subtract'
 ,'dog'
 ,'flawless'
 ,'powerful'
 ,'damaging'
 ,'murky'
 ,'squealing'
 ,'flow'
 ,'cloudy'
 ,'caring'
 ,'cloistered'
 ,'splendid'
 ,'art'
 ,'redundant'
 ,'breezy'
 ,'division'
 ,'squeal'
 ,'heap'
 ,'cure'
 ,'mere'
 ,'grin'
 ,'childlike'
 ,'cautious'
 ,'hope'
 ,'space'
 ,'comparison'
 ,'crib'
 ,'curtain'
 ,'kneel'
 ,'prevent'
 ,'stingy'
 ,'bright'
 ,'debt'
 ,'finger'
 ,'next'
 ,'noxious'
 ,'unusual'
 ,'sound'
 ,'wicked'
 ,'unwritten'
 ,'jagged'
 ,'engine'
 ,'meaty'
 ,'baby'
 ,'voracious'
 ,'nasty'
 ,'neat'
 ,'silk'
 ,'idiotic'
 ,'poison'
 ,'big'
 ,'fence'
 ,'horses'
 ,'base'
 ,'pass'
 ,'things'
 ,'ill-informed'
 ,'rifle'
 ,'graceful'
 ,'attempt'
 ,'wrestle'
 ,'crash'
 ,'shy'
 ,'squash'
 ,'discover'
 ,'money'
 ,'gate'
 ,'bag'
 ,'hospital'
 ,'knee'
 ,'celery'
 ,'voyage'
 ,'hair'
 ,'abiding'
 ,'red'
 ,'approve'
 ,'hydrant'
 ,'unite'
 ,'matter'
 ,'dry'
 ,'protective'
 ,'servant'
 ,'needy'
 ,'tacky'
 ,'noisy'
 ,'cough'
 ,'drown'
 ,'evanescent'
 ,'parcel'
 ,'abandoned'
 ,'fascinated'
 ,'spicy'
 ,'order'
 ,'grubby'
 ,'middle'
 ,'song'
 ,'large'
 ,'tremble'
 ,'trap'
 ,'belief'
 ,'slim'
 ,'fretful'
 ,'playground'
 ,'zoom'
 ,'tangible'
 ,'tall'
 ,'few'
 ,'sponge'
 ,'person'
 ,'tasteful'
 ,'nutty'
 ,'book'
 ,'unarmed'
 ,'paltry'
 ,'rain'
 ,'fork'
 ,'amuck'
 ,'jazzy'
 ,'sisters'
 ,'light'
 ,'street'
 ,'rabid'
 ,'frantic'
 ,'standing'
 ,'shade'
 ,'moan'
 ,'piquant'
 ,'quill'
 ,'chief'
 ,'wobble'
 ,'desk'
 ,'scratch'
 ,'van'
 ,'chilly'
 ,'steady'
 ,'throat'
 ,'zoo'
 ,'overwrought'
 ,'type'
 ,'troubled'
 ,'guard'
 ,'breath'
 ,'pricey'
 ,'scorch'
 ,'chase'
 ,'strip'
 ,'remember'
 ,'view'
 ,'eye'
 ,'mountainous'
 ,'songs'
 ,'fowl'
 ,'vague'
 ,'provide'
 ,'cream'
 ,'crown'
 ,'tearful'
 ,'teeth'
 ,'control'
 ,'inconclusive'
 ,'substance'
 ,'reduce'
 ,'actor'
 ,'upbeat'
 ,'organic'
 ,'harmony'
 ,'feeling'
 ,'likeable'
 ,'cable'
 ,'depend'
 ,'rub'
 ,'camp'
 ,'unique'
 ,'invite'
 ,'remove'
 ,'functional'
 ,'terrible'
 ,'replace'
 ,'verdant'
 ,'edge'
 ,'clam'
 ,'resolute'
 ,'airplane'
 ,'hat'
 ,'destroy'
 ,'toy'
 ,'cheerful'
 ,'tricky'
 ,'messy'
 ,'haircut'
 ,'icicle'
 ,'apathetic'
 ,'obese'
 ,'shame'
 ,'awesome'
 ,'teeny'
 ,'hurry'
 ,'appear'
 ,'blue-eyed'
 ,'file'
 ,'chew'
 ,'festive'
 ,'mend'
 ,'damp'
 ,'loutish'
 ,'border'
 ,'fearful'
 ,'collect'
 ,'naughty'
 ,'recognise'
 ,'knowing'
 ,'eggnog'
 ,'report'
 ,'obtainable'
 ,'dependent'
 ,'well-to-do'
 ,'hug'
 ,'greet'
 ,'shoes'
 ,'hilarious'
 ,'exercise'
 ,'economic'
 ,'flood'
 ,'oceanic'
 ,'bitter'
 ,'wail'
 ,'destruction'
 ,'abhorrent'
 ,'uninterested'
 ,'seashore'
 ,'arrange'
 ,'wretched'
 ,'typical'
 ,'kick'
 ,'well-groomed'
 ,'ugliest'
 ,'abundant'
 ,'argument'
 ,'frequent'
 ,'insect'
 ,'jaded'
 ,'defiant'
 ,'locket'
 ,'oil'
 ,'fruit'
 ,'bat'
 ,'mind'
 ,'road'
 ,'probable'
 ,'friendly'
 ,'unlock'
 ,'knotty'
 ,'rigid'
 ,'baseball'
 ,'hellish'
 ,'ignorant'
 ,'impartial'
 ,'activity'
 ,'harass'
 ,'rod'
 ,'coordinated'
 ,'giant'
 ,'intelligent'
 ,'history'
 ,'card'
 ,'club'
 ,'teeny-tiny'
 ,'flaky'
 ,'giants'
 ,'automatic'
 ,'worry'
 ,'permit'
 ,'bore'
 ,'plough'
 ,'competition'
 ,'healthy'
 ,'rush'
 ,'sassy'
 ,'bottle'
 ,'loose'
 ,'condemned'
 ,'aboriginal'
 ,'faulty'
 ,'unsuitable'
 ,'dogs'
 ,'week'
 ,'gray'
 ,'bike'
 ,'robust'
 ,'stupid'
 ,'jewel'
 ,'degree'
 ,'simplistic'
 ,'attend'
 ,'safe'
 ,'iron'
 ,'settle'
 ,'comb'
 ,'goofy'
 ,'boil'
 ,'permissible'
 ,'horrible'
 ,'gorgeous'
 ,'machine'
 ,'jealous'
 ,'confused'
 ,'hot'
 ,'kindhearted'
 ,'island'
 ,'toys'
 ,'classy'
 ,'enchanting'
 ,'flight'
 ,'test'
 ,'shave'
 ,'carry'
 ,'spiffy'
 ,'employ'
 ,'swift'
 ,'exist'
 ,'wipe'
 ,'separate'
 ,'metal'
 ,'phobic'
 ,'onerous'
 ,'stir'
 ,'didactic'
 ,'greasy'
 ,'oranges'
 ,'nail'
 ,'steam'
 ,'turkey'
 ,'obnoxious'
 ,'bed'
 ,'meek'
 ,'nutritious'
 ,'add'
 ,'tin'
 ,'paste'
 ,'duck'
 ,'spotty'
 ,'fat'
 ,'smash'
 ,'willing'
 ,'bucket'
 ,'zippy'
 ,'hands'
 ,'disappear'
 ,'existence'
 ,'heartbreaking'
 ,'milk'
 ,'somber'
 ,'thinkable'
 ,'mindless'
 ,'pizzas'
 ,'shiver'
 ,'wiry'
 ,'impulse'
 ,'judicious'
 ,'kindly'
 ,'stomach'
 ,'wool'
 ,'repeat'
 ,'sneaky'
 ,'pinch'
 ,'watery'
 ,'calculator'
 ,'mountain'
 ,'ancient'
 ,'juvenile'
 ,'memory'
 ,'pin'
 ,'seed'
 ,'juicy'
 ,'macabre'
 ,'envious'
 ,'malicious'
 ,'curl'
 ,'rare'
 ,'pot'
 ,'icky'
 ,'regular'
 ,'rate'
 ,'busy'
 ,'snotty'
 ,'robin'
 ,'wrist'
 ,'spurious'
 ,'bustling'
 ,'rake'
 ,'crawl'
 ,'dreary'
 ,'rabbits'
 ,'property'
 ,'curly'
 ,'tidy'
 ,'wreck'
 ,'addition'
 ,'fall'
 ,'acoustics'
 ,'army'
 ,'close'
 ,'internal'
 ,'temporary'
 ,'talented'
 ,'rinse'
 ,'stem'
 ,'exuberant'
 ,'wire'
 ,'pointless'
 ,'ground'
 ,'secretary'
 ,'cross'
 ,'trees'
 ,'real'
 ,'protect'
 ,'draconian'
 ,'payment'
 ,'animal'
 ,'subsequent'
 ,'sign'
 ,'belligerent'
 ,'tightfisted'
 ,'helpful'
 ,'accept'
 ,'damage'
 ,'painstaking'
 ,'eminent'
 ,'religion'
 ,'mate'
 ,'work'
 ,'allow'
 ,'behavior'
 ,'colour'
 ,'breakable'
 ,'modern'
 ,'grass'
 ,'leather'
 ,'tasteless'
 ,'polite'
 ,'ants'
 ,'bouncy'
 ,'thin'
 ,'rot'
 ,'sun'
 ,'obscene'
 ,'certain'
 ,'descriptive'
 ,'distinct'
 ,'treat'
 ,'sneeze'
 ,'north'
 ,'bang'
 ,'wren'
 ,'night'
 ,'tap'
 ,'fair'
 ,'sort'
 ,'mask'
 ,'perfect'
 ,'loss'
 ,'legs'
 ,'berserk'
 ,'royal'
 ,'attractive'
 ,'knowledgeable'
 ,'consist'
 ,'ripe'
 ,'suggest'
 ,'fact'
 ,'sigh'
 ,'complex'
 ,'adorable'
 ,'route'
 ,'poor'
 ,'accessible'
 ,'mouth'
 ,'pedal'
 ,'thing'
 ,'industrious'
 ,'point'
 ,'fish'
 ,'cakes'
 ,'best'
 ,'building'
 ,'weather'
 ,'misty'
 ,'girl'
 ,'zesty'
 ,'sick'
 ,'possible'
 ,'easy'
 ,'quarter'
 ,'ill-fated'
 ,'slope'
 ,'beneficial'
 ,'dazzling'
 ,'solid'
 ,'youthful'
 ,'disagree'
 ,'depressed'
 ,'deliver'
 ,'cagey'
 ,'zip'
 ,'science'
 ,'tired'
 ,'scandalous'
 ,'daughter'
 ,'steep'
 ,'imported'
 ,'invent'
 ,'black'
 ,'name'
 ,'tender'
 ,'abounding'
 ,'daffy'
 ,'look'
 ,'needless'
 ,'stain'
 ,'shop'
 ,'cry'
 ,'garrulous'
 ,'badge'
 ,'return'
 ,'minute'
 ,'chance'
 ,'slip'
 ,'many'
 ,'disgusted'
 ,'digestion'
 ,'top'
 ,'spare'
 ,'bent'
 ,'infamous'
 ,'clip'
 ,'connect'
 ,'encourage'
 ,'anxious'
 ,'ten'
 ,'daily'
 ,'grotesque'
 ,'sparkle'
 ,'suppose'
 ,'porter'
 ,'invention'
 ,'supreme'
 ,'rustic'
 ,'jolly'
 ,'downtown'
 ,'uncovered'
 ,'calculating'
 ,'earth'
 ,'thank'
 ,'touch'
 ,'texture'
 ,'smooth'
 ,'absorbing'
 ,'dead'
 ,'concern'
 ,'month'
 ,'dream'
 ,'join'
 ,'force'
 ,'nauseating'
 ,'drawer'
 ,'wander'
 ,'third'
 ,'alert'
 ,'thrill'
 ,'fantastic'
 ,'plane'
 ,'spotted'
 ,'nimble'
 ,'alcoholic'
 ,'earn'
 ,'sour'
 ,'grey'
 ,'advise'
 ,'domineering'
 ,'shaky'
 ,'lethal'
 ,'victorious'
 ,'material'
 ,'agreeable'
 ,'hulking'
 ,'impossible'
 ,'office'
 ,'old-fashioned'
 ,'spiteful'
 ,'prepare'
 ,'rural'
 ,'save'
 ,'heat'
 ,'heavy'
 ,'school'
 ,'statuesque'
 ,'petite'
 ,'team'
 ,'share'
 ,'squirrel'
 ,'agree'
 ,'punch'
 ,'bruise'
 ,'used'
 ,'popcorn'
 ,'fixed'
 ,'brick'
 ,'adhesive'
 ,'air'
 ,'signal'
 ,'savory'
 ,'board'
 ,'trade'
 ,'yoke'
 ,'funny'
 ,'lace'
 ,'blushing'
 ,'death'
 ,'miss'
 ,'ring'
 ,'actually'
 ,'blood'
 ,'wall'
 ,'excited'
 ,'erratic'
 ,'line'
 ,'tiresome'
 ,'shrug'
 ,'pause'
 ,'interesting'
 ,'axiomatic'
 ,'unused'
 ,'even'
 ,'books'
 ,'aromatic'
 ,'clammy'
 ,'raspy'
 ,'wait'
 ,'scrawny'
 ,'print'
 ,'acceptable'
 ,'care'
 ,'wash'
 ,'rabbit'
 ,'fix'
 ,'doctor'
 ,'unfasten'
 ,'narrow'
 ,'minister'
 ,'nod'
 ,'racial'
 ,'grease'
 ,'premium'
 ,'cloth'
 ,'mix'
 ,'hapless'
 ,'stick'
 ,'snail'
 ,'rampant'
 ,'roasted'
 ,'blue'
 ,'rough'
 ,'yak'
 ,'brown'
 ,'dynamic'
 ,'part'
 ,'swing'
 ,'command'
 ,'finicky'
 ,'amusement'
 ,'private'
 ,'burst'
 ,'nine'
 ,'well-made'
 ,'weary'
 ,'car'
 ,'wealth'
 ,'impress'
 ,'receive'
 ,'clean'
 ,'travel'
 ,'detailed'
 ,'influence'
 ,'brainy'
 ,'gaze'
 ,'round'
 ,'nippy'
 ,'previous'
 ,'ambiguous'
 ,'love'
 ,'aggressive'
 ,'country'
 ,'lip'
 ,'burn'
 ,'calendar'
 ,'borrow'
 ,'foot'
 ,'sky'
 ,'level'
 ,'succinct'
 ,'woman'
 ,'cushion'
 ,'motionless'
 ,'bump'
 ,'concentrate'
 ,'reaction'
 ,'instinctive'
 ,'helpless']

};